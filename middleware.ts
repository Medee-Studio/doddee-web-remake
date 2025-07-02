import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { PROTECTED_ROUTES, hasRouteAccess } from '@/lib/subscription/utils'
import { verifyToken } from './lib/auth/session'

// Protected routes that require authentication
// const protectedRoutes = ['/dashboard', '/auth/change-password', '/auth/complete-profile']
const protectedRoutes = ['/dashboard', '/auth/change-password']

// Auth routes that should redirect to dashboard when authenticated
const authRoutes = ['/auth/login', '/auth/signup']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Create a response object
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Create a Supabase client configured to use cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          // If the cookie is set, update the request and response cookies.
          request.cookies.set({ name, value, ...options })
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          // If the cookie is removed, update the request and response cookies.
          request.cookies.set({ name, value: '', ...options })
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )
  
  // Check if current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))
  
  try {
    let user = null
    let isTokenValid = false

    // COMMENTED OUT JWT VERIFICATION
    const accessTokenCookie = request.cookies.get('sb-access-token')
    if (accessTokenCookie?.value) {
      const tokenPayload = await verifyToken(accessTokenCookie.value)
      if (tokenPayload) {
        isTokenValid = true
      }
    }

    // Always get session from Supabase as the source of truth for user object and full session state
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    
    if (sessionError) {
      console.error('Error getting Supabase session:', sessionError.message)
      // Decide how to handle session errors, e.g., redirect to an error page or login
      // For now, we'll treat it as if there's no user, which might lead to login redirect
    } else if (session) {
      user = session.user
    }

    // If local token verification failed but Supabase session exists, Supabase handles it.
    // If local token verification passed but Supabase session doesn't exist (edge case), treat as logged out.

    // CASE 1: User is NOT authenticated AND tries to access protected route OR root
    if ((isProtectedRoute || pathname === '/') && !user) {
      const url = request.nextUrl.clone()
      url.pathname = '/auth/login'
      if (!isTokenValid && accessTokenCookie?.value) { // Token was present but invalid
        url.searchParams.set('message', 'Votre session a expiré. Veuillez vous reconnecter.')        
        // response.cookies.delete('sb-access-token')
        // response.cookies.delete('sb-refresh-token')
      } else if (pathname === '/auth/change-password') {
        url.searchParams.set('message', 'Veuillez vous connecter pour changer votre mot de passe.')
      } else if (pathname.startsWith('/dashboard')) {
        url.searchParams.set('message', 'Veuillez vous connecter pour accéder à cette page.')
      } else if (pathname === '/auth/complete-profile') {
        url.searchParams.set('message', 'Veuillez vous connecter pour compléter votre profil.')
      } else if (pathname === '/') {
        url.searchParams.set('message', 'Veuillez vous connecter pour accéder à l\'application.')
      }
      return NextResponse.redirect(url, { headers: response.cookies.toString() ? { 'Set-Cookie': response.cookies.toString() } : {} })
    }
    
    // CASE 2: User IS authenticated AND tries to access auth routes (login, signup) or root
    if (user && (isAuthRoute || pathname === '/')) {
      if (pathname !== '/auth/complete-profile' && pathname !== '/auth/change-password') {
        const {  profile_completed } = user.user_metadata || {}
        if ( !profile_completed) {
          // If profile incomplete, always redirect to complete-profile first
          return NextResponse.redirect(new URL('/auth/complete-profile', request.url))
        }
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    }

    // CASE 3: User IS authenticated, but profile is incomplete
    if (user) {
      const {  profile_completed } = user.user_metadata || {}
      const isProfileIncomplete =  !profile_completed
      const isExcludedPath = (
        pathname === '/auth/complete-profile' || 
        pathname === '/auth/login' || 
        pathname === '/auth/signup' || 
        pathname.startsWith('/auth/callback') ||
        pathname === '/auth/change-password'
      )
      
      if (isProfileIncomplete && !isExcludedPath) {
        const redirectToCompleteProfile = new URL('/auth/complete-profile', request.url)
        redirectToCompleteProfile.searchParams.set('next', pathname + request.nextUrl.search)
        return NextResponse.redirect(redirectToCompleteProfile)
      }
    }
    
    // CASE 4: User IS authenticated and on /auth/complete-profile, but profile IS complete
    if (user && pathname === '/auth/complete-profile') {
      const { first_name, last_name, profile_completed } = user.user_metadata || {}
      if ((first_name && last_name) || profile_completed) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    }

    // CASE 5: Check subscription access for premium routes
    if (user && isProtectedRoute && Object.keys(PROTECTED_ROUTES).some(route => pathname.startsWith(route))) {
      try {
        // Get user subscription from database
        const { data: userProfile } = await supabase
          .from('users')
          .select('plan_name, subscription_status')
          .eq('id', user.id)
          .single()

        const userPlan = userProfile?.plan_name || 'gratuit'
        const subscriptionStatus = userProfile?.subscription_status || 'active'
        
        // Check if user has access to this route
        if (subscriptionStatus === 'active' || subscriptionStatus === 'trialing') {
          if (!hasRouteAccess(userPlan as any, pathname)) {
            const url = request.nextUrl.clone()
            url.pathname = '/dashboard/subscription'
            url.searchParams.set('upgrade', 'true')
            url.searchParams.set('route', pathname)
            return NextResponse.redirect(url)
          }
        } else if (subscriptionStatus === 'canceled' || subscriptionStatus === 'unpaid') {
          // If subscription is not active and trying to access premium route
          const premiumRoute = Object.keys(PROTECTED_ROUTES).find(route => pathname.startsWith(route))
          if (premiumRoute) {
            const url = request.nextUrl.clone()
            url.pathname = '/dashboard/subscription'
            url.searchParams.set('reactivate', 'true')
            return NextResponse.redirect(url)
          }
        }
      } catch (error) {
        console.error('Error checking subscription access:', error)
        // Allow access on error to prevent site breakage
      }
    }

    // Default: allow the request to proceed
    return response
    
  } catch (error) {
    console.error('Middleware unhandled error:', error)
    // Fallback: allow request to proceed to prevent site outage due to middleware bugs
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api(?!/auth)).*)',
    '/dashboard/:path*',
    '/auth/login',
    '/auth/signup',
    '/auth/complete-profile',
    '/auth/change-password',
  ],
} 