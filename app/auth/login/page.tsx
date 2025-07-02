"use client"

import { useState } from "react";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
import { UserTypeSelection, UserType } from "@/components/auth/user-type-selection";
import { CompaniesMap } from "@/components/auth/companies-map";
import AppIcon from "@/components/common/app-icon";

export default function LoginPage() {
  const [selectedUserType, setSelectedUserType] = useState<UserType | null>(null);

  const handleUserTypeSelect = (userType: UserType) => {
    setSelectedUserType(userType);
  };

  const handleBack = () => {
    setSelectedUserType(null);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className={`w-full grid gap-6 ${selectedUserType === 'particulier' ? 'max-w-6xl' : selectedUserType === 'entreprise' ? 'max-w-md' : 'max-w-lg'}`}>
        {/* Header - app icon always visible */}
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 font-medium mb-2"
          >
            <AppIcon className="w-48" />
            <span className="sr-only">{process.env.NEXT_PUBLIC_APP_NAME}</span>
          </Link>
        </div>

        {/* Content based on user type selection */}
        {!selectedUserType && (
          <UserTypeSelection onUserTypeSelect={handleUserTypeSelect} />
        )}

        {selectedUserType === "entreprise" && (
          <div className="space-y-6">
            {/* Enterprise Header */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center">
                <button
                  onClick={handleBack}
                  className="text-sm text-muted-foreground hover:text-primary underline underline-offset-4"
                >
                  ← Changer de profil
                </button>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold mb-2">
                  Bienvenue sur {process.env.NEXT_PUBLIC_APP_NAME}
                </h1>
                <div className="text-center text-sm">
                  Pas encore de compte ?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-primary underline underline-offset-4 hover:text-primary/90"
                  >
                    Créer un compte
                  </Link>
                </div>
              </div>
            </div>
            <LoginForm />
          </div>
        )}

        {selectedUserType === "particulier" && (
          <CompaniesMap onBack={handleBack} />
        )}

        {/* Footer - only show for enterprise login */}
        {selectedUserType === "entreprise" && (
          <div className="text-balance text-center text-xs text-muted-foreground mt-4">
            En cliquant sur continuer, vous acceptez nos{" "}
            <Link
              href="/legal/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Conditions d&apos;utilisation
            </Link>{" "}
            et{" "}
            <Link
              href="/legal/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Politique de confidentialité
            </Link>
            .
          </div>
        )}
      </div>
    </div>
  );
}
