import Link from "next/link"
import { ChangePasswordForm } from "@/components/auth/change-password-form"
import AppIcon from "@/components/common/app-icon"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function ChangePasswordPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    // This should ideally be caught by middleware, but as a fallback:
    redirect("/auth/login?message=Veuillez vous connecter pour changer votre mot de passe.")
  }
  
  // Check if user signed up with OAuth provider
  const isOAuthUser = user.app_metadata?.provider && user.app_metadata.provider !== 'email';

  if (isOAuthUser) {
    // Redirect to account page with a message if user is OAuth
    redirect("/dashboard/account?message=La gestion du mot de passe n\'est pas disponible pour les comptes " + user.app_metadata.provider + ".")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md grid gap-6">
        <div className="flex flex-col items-center gap-2">
          <Link href="/" className="flex flex-col items-center gap-2 font-medium">
            <AppIcon className="w-48" />
            <span className="sr-only">{process.env.NEXT_PUBLIC_APP_NAME}</span>
          </Link>
          {/* Title is in the Card component, so no h1 here or make it more generic */}
        </div>
        
        <ChangePasswordForm />
        
        <div className="text-center text-sm">
          <Link href="/dashboard/account" className="text-primary underline underline-offset-4 hover:text-primary/90">
            Retour aux paramètres du compte
          </Link>
        </div>
      </div>
    </div>
  )
} 