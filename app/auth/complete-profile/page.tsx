import Link from "next/link"
import { CompleteProfileForm } from "@/components/auth/complete-profile-form"
import AppIcon from "@/components/common/app-icon"

export default function CompleteProfilePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <div className="w-full ">
   
        
        <CompleteProfileForm />

      </div>
    </div>
  )
} 