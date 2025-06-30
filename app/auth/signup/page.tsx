import Link from "next/link";
import { SignupForm } from "@/components/auth/signup-form";
import AppIcon from "@/components/common/app-icon";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md grid gap-6">
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 font-medium mb-2"
          >
            <AppIcon className="w-48" />
            <span className="sr-only">{process.env.NEXT_PUBLIC_APP_NAME}</span>
          </Link>
          <h1 className="text-xl font-bold">Créer votre compte</h1>
          <div className="text-center text-sm">
            Vous avez déjà un compte?{" "}
            <Link
              href="/auth/login"
              className="text-primary underline underline-offset-4 hover:text-primary/90"
            >
              Connexion
            </Link>
          </div>
        </div>

        <SignupForm />

        <div className="text-balance text-center text-xs text-muted-foreground">
          En cliquant sur continuer, vous acceptez nos{" "}
          <a
            href="/legal/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Conditions d&apos;utilisation
          </a>{" "}
          et{" "}
          <a
            href="/legal/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Politique de confidentialité
          </a>
          .
        </div>
      </div>
    </div>
  );
}
