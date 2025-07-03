"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { toast } from "sonner"
import {
  EllipsisVertical,
  LogOut as LogOutIcon,
  User,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"

interface NavUserDetails {
  displayName: string;
  email: string;
  initials: string;
}

export function NavUser() { 
  const { isMobile } = useSidebar()
  const [userDetails, setUserDetails] = useState<NavUserDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    try {
      await supabase.auth.signOut()
      toast.success("Successfully signed out")
      window.location.href = "/"
    } catch (error) {
      console.error("Error signing out:", error)
      toast.error("Failed to sign out")
    }
  }

  async function handleAccount() {
    router.push("/dashboard/account")
  }

  useEffect(() => {
    const supabase = createClient()

    const fetchUserData = async () => {
      const { data: { user }, error } = await supabase.auth.getUser()

      if (error) {
        console.error("Error fetching user data:", error.message)
        if (error.message === "User from sub claim in JWT does not exist") {
          await handleSignOut() // Automatically sign out on this specific error
          return // Stop further execution as user will be redirected
        }
        // toast.error("Failed to load user information.") // Optional: show toast on error
        setUserDetails(null) // Ensure no stale data
        setIsLoading(false)
        return
      }

      if (user) {
        const email = user.email || ""
        
        const displayName = email || "User" // Use email as display name
        const initials = email ? email[0].toUpperCase() : "U" // Use first letter of email
        
        setUserDetails({ displayName, email, initials })
      } else {
        setUserDetails(null) // No user session
      }
      setIsLoading(false)
    }

    fetchUserData()

    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      // Re-fetch user data on relevant auth events
      if (event === "SIGNED_IN" || event === "USER_UPDATED" || event === "TOKEN_REFRESHED") {
        fetchUserData()
      }
      if (event === "SIGNED_OUT") {
        setUserDetails(null)
        setIsLoading(false) // No longer loading if signed out
      }
    })

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  if (isLoading) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="w-full" disabled>
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse mr-3"></div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="h-4 bg-muted animate-pulse rounded w-3/4"></span>
              <span className="h-3 bg-muted animate-pulse rounded w-1/2 mt-1"></span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    )
  }

  if (!userDetails) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="rounded-lg bg-muted">
                <div className="h-8 w-8 flex items-center justify-center">
                <span className="font-semibold">{userDetails.initials}</span>
                </div>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{userDetails.displayName}</span>
              </div>
              <EllipsisVertical className="ml-auto h-4 w-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-muted">
                <span className="font-semibold">{userDetails.initials}</span>
              </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{userDetails.displayName}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleAccount} className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Compte</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Déconnexion</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
} 