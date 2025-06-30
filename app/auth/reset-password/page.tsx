import Link from "next/link"
import { RequestPasswordResetForm } from "@/components/auth/request-password-reset-form"
import AppIcon from "@/components/common/app-icon"

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md grid gap-6">
        <div className="flex flex-col items-center gap-2">
          <Link href="/" className="flex flex-col items-center gap-2 font-medium">
            <AppIcon className="w-48" />
            <span className="sr-only">{process.env.NEXT_PUBLIC_APP_NAME}</span>
          </Link>
          {/* Title is in the Card component */}
        </div>
        
        <RequestPasswordResetForm />
        
        <div className="text-center text-sm">
          Se souvenir de son mot de passe ?{" "}
          <Link href="/auth/login" className="text-primary underline underline-offset-4 hover:text-primary/90">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  )
} 