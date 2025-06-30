"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { UpdatePasswordForm } from "@/components/auth/update-password-form";
import AppIcon from "@/components/common/app-icon";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpdatePasswordClientComponent() {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "PASSWORD_RECOVERY") {
          setShowForm(true);
          setAuthError(null);
        } else if (event === "SIGNED_IN" && session && showForm) {
          // This case might occur if the user is already signed in and lands here
          // or after a successful password update if Supabase signs them in.
          // If they were in password recovery, they should have already updated their password.
          // console.log("Signed in during password update flow, current state: showForm=", showForm);
        } else if (event === "SIGNED_OUT" && !showForm) {
          // If not in recovery mode and signed out, something is wrong or user navigated away.
        }
        setIsLoading(false);
      }
    );

    const hash = window.location.hash;
    if (hash.includes("type=recovery") && !showForm) {
        console.log("Recovery type found in URL, attempting to show form.");
        setShowForm(true); 
        setIsLoading(false);
    }
    
    const timer = setTimeout(() => {
      if (isLoading && !showForm && !hash.includes("type=recovery")) {
        setIsLoading(false); 
        setShowForm(true); 
      }
    }, 3000);

    return () => {
      authListener?.subscription.unsubscribe();
      clearTimeout(timer);
    };
  }, [router, showForm, isLoading]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">Vérification du lien de réinitialisation...</p>
      </div>
    );
  }

  if (authError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
        <div className="w-full max-w-md grid gap-6">
            <div className="flex flex-col items-center gap-2">
                <Link href="/" className="flex flex-col items-center gap-2 font-medium">
                    <AppIcon className="size-10 mb-2" />                       
                </Link>
                <h1 className="text-xl font-bold text-destructive">Erreur de réinitialisation</h1>
                <p className="text-muted-foreground">{authError}</p>
                <Button asChild className="mt-4">
                    <Link href="/auth/reset-password">Demander un nouveau lien</Link>
                </Button>
            </div>
        </div>
      </div>
    );
  }
  
  if (!showForm && !isLoading) {
     return (
      <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
        <div className="w-full max-w-md grid gap-6">
            <div className="flex flex-col items-center gap-2">
                <Link href="/" className="flex flex-col items-center gap-2 font-medium">
                    <AppIcon className="size-10 mb-2" />                       
                </Link>
                <h1 className="text-xl font-bold">Lien invalide</h1>
                <p className="text-muted-foreground">
                    Le lien de réinitialisation de mot de passe est invalide, a expiré ou a déjà été utilisé. 
                    Veuillez demander un nouveau lien si nécessaire.
                </p>
                <Button asChild className="mt-4">
                    <Link href="/auth/reset-password">Demander un nouveau lien</Link>
                </Button>
                 <Button variant="outline" asChild className="mt-2">
                    <Link href="/auth/login">Retour à la connexion</Link>
                </Button>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md grid gap-6">
        <div className="flex flex-col items-center gap-2">
          <Link href="/" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <AppIcon className="size-6" />
            </div>
            <span className="sr-only">{process.env.NEXT_PUBLIC_APP_NAME}</span>
          </Link>
        </div>
        <UpdatePasswordForm />
      </div>
    </div>
  );
} 