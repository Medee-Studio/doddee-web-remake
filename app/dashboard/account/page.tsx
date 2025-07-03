import { redirect } from "next/navigation"
import { AccountForm } from "@/components/auth/account-form"
import { AccountFormSkeleton } from "@/components/auth/account-form-skeleton"
import { createClient } from "@/lib/supabase/server"
import { Suspense } from "react"

export default async function AccountPage() {
    const supabase = await createClient()
    
    // Get the currently logged in user
    const session = await supabase.auth.getSession()
    const user = session.data.session?.user
    
    // If there's an error or no user found, redirect to login
    if (!user) {
        console.error("Error fetching user:", session)
        redirect("/auth/login")
    }

    return (
        <div className="space-y-6 h-dvh">
            <div className="container max-w-4xl px-4 py-4 mx-auto">
                <Suspense fallback={<AccountFormSkeleton />}>
                    <AccountForm user={user} />
                </Suspense>
            </div>
        </div>
    )
}