"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
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

const updatePasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, { message: "Le nouveau mot de passe doit contenir au moins 8 caractères." }),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas.",
  path: ["confirmPassword"],
})

type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>

export function UpdatePasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams();

  // This form is typically used after a user clicks a password reset link.
  // Supabase handles the token verification implicitly when onAuthStateChange fires with PASSWORD_RECOVERY.

  const form = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  })
  
  useEffect(() => {
    // Attempt to get the error from URL parameters, if Supabase redirects with an error
    const errorParam = searchParams.get('error');
    const errorDescriptionParam = searchParams.get('error_description');

    if (errorParam) {
      setError(errorDescriptionParam || errorParam);
      toast.error(errorDescriptionParam || errorParam);
    }
  }, [searchParams]);

  async function onSubmit(values: UpdatePasswordFormValues) {
    setIsLoading(true)
    setError(null)
    setMessage(null)
    const supabase = createClient()

    const { error: updateError } = await supabase.auth.updateUser({
      password: values.newPassword,
    })

    if (updateError) {
      toast.error(updateError.message || "Erreur lors de la mise à jour du mot de passe.")
      setError(updateError.message || "Erreur lors de la mise à jour du mot de passe.")
      console.error("Password update error:", updateError)
    } else {
      toast.success("Mot de passe mis à jour avec succès ! Vous pouvez maintenant vous connecter.")
      setMessage("Mot de passe mis à jour avec succès ! Vous pouvez maintenant vous connecter.")
      form.reset()
      // Redirect to login after a short delay to allow toast to be seen
      setTimeout(() => {
        router.push("/auth/login")
      }, 2000)
    }
    setIsLoading(false)
  }
  
  if (message) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Succès</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-600">{message}</p>
          <Button onClick={() => router.push("/auth/login")} className="mt-4 w-full">
            Aller à la connexion
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Définir un nouveau mot de passe</CardTitle>
        <CardDescription>
          Veuillez entrer votre nouveau mot de passe ci-dessous.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/30 text-destructive text-sm rounded-md">
            <p>{error}</p>
          </div>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nouveau mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
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
                  <FormLabel>Confirmer le nouveau mot de passe</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Mettre à jour le mot de passe
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
} 