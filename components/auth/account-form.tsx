"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const profileFormSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

interface User {
  id: string;
  email?: string;
  user_metadata: { 
    first_name?: string;
    last_name?: string;
  };
  app_metadata: { 
    provider?: string; 
  };
}

export function AccountForm({ user }: { user: User }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isPristine, setIsPristine] = useState(true)
  const router = useRouter()
  
  // Store initialValues in state so we can update it after a successful save
  const [initialValues, setInitialValues] = useState({
    firstName: user?.user_metadata?.first_name || "",
    lastName: user?.user_metadata?.last_name || "",
  })

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: initialValues,
  })

  // Monitor form changes to determine if pristine
  useEffect(() => {
    const subscription = form.watch((value) => {
      const currentValues = {
        firstName: value.firstName || "",
        lastName: value.lastName || "",
      }
      const currentInitialValues = {
        firstName: initialValues.firstName || "",
        lastName: initialValues.lastName || "",
      }
      setIsPristine(
        currentValues.firstName === currentInitialValues.firstName && 
        currentValues.lastName === currentInitialValues.lastName
      )
    })
    return () => subscription.unsubscribe()
  }, [form, initialValues])

  async function onSubmit(values: ProfileFormValues) {
    if (isPristine) return; // Should not happen if button is disabled, but as a safeguard

    try {
      setIsLoading(true)
      const supabase = createClient()
      
      const { error } = await supabase.auth.updateUser({
        data: { 
          first_name: values.firstName,
          last_name: values.lastName,
        }
      })

      if (error) {        
        console.error("Erreur lors de la mise à jour du profil:", error.message)
        toast.error(error.message || "Échec de la mise à jour du profil")
      } else {
        toast.success("Profil mis à jour avec succès")
        
        // Update initialValues with new values to properly track pristine state
        const newInitialValues = {
          firstName: values.firstName,
          lastName: values.lastName,
        }
        
        // Update state and form simultaneously
        setInitialValues(newInitialValues)
        form.reset(newInitialValues)
        setIsPristine(true)
        
        router.refresh() 
      }
    } catch (err) {
      console.error("Erreur inattendue lors de la mise à jour du profil:", err)
      toast.error("Une erreur inattendue est survenue")
    } finally {
      setIsLoading(false)
    }
  }

  const isOAuthUser = user?.app_metadata?.provider !== 'email' && user?.app_metadata?.provider !== undefined;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informations personnelles</CardTitle>
          <CardDescription>
            Mettez à jour vos informations personnelles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="Entrez votre prénom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Entrez votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormLabel>Email</FormLabel>
                <div className="mt-1 flex h-10 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground">
                  {user?.email}
                </div>
                <FormDescription className="text-xs mt-1">
                  Votre email ne peut pas être modifié.
                </FormDescription>
              </div>
              <div className="flex justify-end">
              <Button type="submit" size="sm" variant="outline" disabled={isLoading || isPristine}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enregistrement...
                  </>
                ) : (
                  "Enregistrer les modifications"
                )}
              </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sécurité du compte</CardTitle>
          <CardDescription>
            Gérez les paramètres de sécurité de votre compte.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">Mot de passe</h4>
            {!isOAuthUser ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Pour modifier votre mot de passe, veuillez accéder à la page dédiée.
                </p>
                <Button variant="outline" size="sm" asChild className="mt-2">
                  <Link href="/auth/change-password">Changer le mot de passe</Link>
                </Button>
              </>
            ) : (
              <p className="text-sm text-muted-foreground">
                Vous êtes connecté via {user.app_metadata.provider}. La gestion du mot de passe se fait via votre fournisseur d&apos;identité.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gestion de l&apos;équipe</CardTitle>
          <CardDescription>
            Gérez les membres de votre équipe et les paramètres de collaboration.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-sm text-muted-foreground">
              Accédez à la page de gestion de l&apos;équipe pour inviter de nouveaux membres ou modifier les rôles existants.
            </p>
            <Button variant="outline" size="sm" asChild className="mt-2">
              <Link href="/dashboard/team">Gérer l&apos;équipe</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 