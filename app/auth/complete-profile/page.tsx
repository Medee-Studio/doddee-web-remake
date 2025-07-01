import Link from "next/link"
import { CompleteProfileForm } from "@/components/auth/complete-profile-form"
import AppIcon from "@/components/common/app-icon"

export default function CompleteProfilePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md grid gap-6">
        <div className="flex flex-col items-center gap-2">
          <Link href="/" className="flex flex-col items-center gap-2 font-medium">
            <AppIcon className="w-48" />
            <span className="sr-only">{process.env.NEXT_PUBLIC_APP_NAME}</span>
          </Link>
          <h1 className="text-xl font-bold">Complétez votre profil</h1>
          <div className="text-center text-sm text-muted-foreground">
            Veuillez renseigner votre prénom et nom pour continuer.
          </div>
        </div>
        
        <CompleteProfileForm />
        
        <div className="text-balance text-center text-xs text-muted-foreground">
          Ces informations nous aident à personnaliser votre expérience.
        </div>
      </div>
    </div>
  )
} 