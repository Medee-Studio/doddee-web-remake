import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
import AppIcon from "@/components/common/app-icon";

export default function LoginPage() {
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
          <h1 className="text-xl font-bold">
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

        <LoginForm />

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
      </div>
    </div>
  );
}
