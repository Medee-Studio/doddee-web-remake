"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createClient } from '@/lib/supabase/client'
import GoogleIcon from "@/public/google-icon.svg"
import Image from "next/image"

const formSchema = z.object({
  email: z.string().email({ message: 'Adresse email invalide' }),
  password: z.string().min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ['confirmPassword'],
})

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState(false)
  const [isOAuthLoading, setIsOAuthLoading] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      const supabase = createClient()
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: `${origin}/auth/callback`, // Optional: If you want email confirmation
        },
      })

      if (error) {
        console.error('Signup error:', error.message)
        let toastMessage = "Erreur lors de l'inscription.";
        // Cast error to any to check for a 'code' property
        const errorCode = (error as { code: string, message: string }).code;

        if (errorCode === 'email_exists') {
          toastMessage = "Un compte avec cette adresse e-mail existe déjà. Veuillez vous connecter ou utiliser une autre adresse.";
        } else if (errorCode === 'email_address_invalid') {
          toastMessage = "L'adresse e-mail fournie n'est pas valide.";
        } else if (errorCode === 'weak_password') {
          toastMessage = "Le mot de passe est trop faible ou ne respecte pas les critères de sécurité. Veuillez choisir un mot de passe plus complexe.";
        } else if (error.message.toLowerCase().includes("request timeout") || error.message.toLowerCase().includes("timeout") || error.message.toLowerCase().includes("failed to fetch")) {
          toastMessage = "La requête a échoué ou a expiré. Veuillez vérifier votre connexion internet et réessayer.";
        } else if (error.message) {
          toastMessage = `Erreur: ${error.message}`;
        }
        toast.error(toastMessage)
        setIsLoading(false)
      } else {
        toast.success(
          'Inscription réussie! Veuillez vérifier votre email pour confirmer votre compte.'
        )
        // Redirect or clear form? Redirecting to login might be good.
        router.push('/auth/verify')
        // router.refresh() // Refresh if staying on the same layout conceptually
      }
    } catch (err) {
      console.error('Erreur inattendue lors de l\'inscription:', err)
      toast.error('Une erreur inattendue est survenue.')
      setIsLoading(false)
    }
  }

  async function handleOAuthSignIn(provider: 'google') {
    try {
      setIsOAuthLoading(provider)
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
        },
      })

      if (error) {
        console.error(`Erreur lors de la connexion avec ${provider}:`, error.message)
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
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nom@exemple.com"
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
                <FormLabel>Mot de passe</FormLabel>
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmer le mot de passe</FormLabel>
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
            S&apos;inscrire avec email
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            OU
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        className="w-full"
        disabled={isLoading || !!isOAuthLoading}
        onClick={() => handleOAuthSignIn('google')}
      >
        {isOAuthLoading === 'google' ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Image src={GoogleIcon} alt="Google" className="mr-2 h-4 w-4" />
        )}
        Continuer avec Google
      </Button>
    </div>
  )
} 