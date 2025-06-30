"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import GoogleIcon from "@/public/google-icon.svg"
import Image from "next/image"
import Link from "next/link"

const formSchema = z.object({
  email: z.string().email({ message: "Adresse email invalide" }),
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
})

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isOAuthLoading, setIsOAuthLoading] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })

      if (error) {        
        console.error("Erreur lors de la connexion:", error.message)
        let toastMessage = "Erreur lors de la connexion.";
        // Cast error to any to check for a 'code' property
        const errorCode = (error as { code: string, message: string }).code;

        if (errorCode === 'email_not_confirmed') {
          toastMessage = "Votre adresse e-mail n'a pas été vérifiée. Veuillez consulter vos e-mails pour finaliser votre inscription.";
        } else if (errorCode === 'invalid_credentials') {
          toastMessage = "Identifiants invalides. Veuillez vérifier votre e-mail et votre mot de passe.";
        } else if (error.message.toLowerCase().includes("request timeout") || error.message.toLowerCase().includes("timeout") || error.message.toLowerCase().includes("failed to fetch")) {
          toastMessage = "La requête a échoué ou a expiré. Veuillez vérifier votre connexion internet et réessayer.";
        } else if (error.message) {
          // Use a more generic message for other Supabase errors, or the error message itself
          toastMessage = `Erreur: ${error.message}`;
        }
        toast.error(toastMessage)
        setIsLoading(false)
      } else {
        // Check user metadata
        const { data: { user } } = await supabase.auth.getUser()
        if (user && (!user.user_metadata?.first_name || !user.user_metadata?.last_name)) {
          toast.info("Veuillez compléter votre profil.");
          router.push('/auth/complete-profile?next=/dashboard');
        } else {
          toast.success("Connexion réussie !")
          router.push('/dashboard')
        }
        router.refresh()
      }
    } catch (err) {
      console.error("Erreur inattendue lors de la connexion:", err)
      toast.error("Une erreur inattendue est survenue.")
      setIsLoading(false)
    }
  }

  async function handleOAuthSignIn(provider: "google") {
    try {
      setIsOAuthLoading(provider)
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            next: '/dashboard'
          }
        },
      })

      if (error) {
        console.error(`OAuth error (${provider}):`, error.message)
        let toastMessage = `Erreur lors de la connexion avec ${provider}.`;
        if (error.message.toLowerCase().includes("request timeout") || error.message.toLowerCase().includes("timeout") || error.message.toLowerCase().includes("failed to fetch")) {
          toastMessage = "La requête a échoué ou a expiré. Veuillez vérifier votre connexion internet et réessayer.";
        } else if (error.message) {
          toastMessage = `Erreur avec ${provider}: ${error.message}`;
        }
        toast.error(toastMessage)
        setIsOAuthLoading(null)
      }
    } catch (err) {
      console.error(`Erreur inattendue lors de la connexion avec ${provider}:`, err)
      toast.error(`Une erreur inattendue est survenue lors de la connexion avec ${provider}.`)
      setIsOAuthLoading(null)
    }
  }

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="nom@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading || !!isOAuthLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-between items-end">
                      <span>Mot de passe</span>
                      <Link href="/auth/reset-password" className="text-sm text-primary underline underline-offset-4 hover:text-primary/90">
                        Mot de passe oublié ?
                      </Link>
                    </FormLabel>

                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        disabled={isLoading || !!isOAuthLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading || !!isOAuthLoading}>
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Connexion avec email
              </Button>
            </div>
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                OU
              </span>
            </div>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              disabled={isLoading || !!isOAuthLoading}
              onClick={() => handleOAuthSignIn("google")}
            >
              {isOAuthLoading === "google" ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Image src={GoogleIcon} alt="Google" className="mr-2 h-4 w-4" />
              )}
              Continuer avec Google
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
} 