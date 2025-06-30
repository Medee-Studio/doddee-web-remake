"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const requestPasswordResetSchema = z.object({
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
})

type RequestPasswordResetFormValues = z.infer<typeof requestPasswordResetSchema>

export function RequestPasswordResetForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<RequestPasswordResetFormValues>({
    resolver: zodResolver(requestPasswordResetSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: RequestPasswordResetFormValues) {
    setIsLoading(true)
    setIsSubmitted(false)
    const supabase = createClient()
    
    // Construct the redirect URL for after the user clicks the password reset link
    // This URL should point to the page where they can set their new password
    const redirectURL = new URL("/auth/update-password", window.location.origin).toString();

    const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: redirectURL,
    })

    if (error) {
      toast.error(error.message || "Erreur lors de l'envoi de l'email de réinitialisation.")
      console.error("Password reset request error:", error)
    } else {
      toast.success("Si un compte existe pour cet email, un lien de réinitialisation a été envoyé.")
      setIsSubmitted(true)
      form.reset()
    }
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Vérifiez vos emails</CardTitle>
          <CardDescription>
            Si un compte est associé à l&apos;adresse email fournie, vous recevrez un lien pour réinitialiser votre mot de passe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Veuillez suivre les instructions dans l&apos;email pour continuer.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Réinitialiser le mot de passe</CardTitle>
        <CardDescription>
          Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="exemple@domaine.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Envoyer le lien de réinitialisation
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 