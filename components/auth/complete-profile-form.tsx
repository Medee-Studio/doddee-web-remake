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

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
})

export function CompleteProfileForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      const supabase = createClient()
      const { data: { user }, error: userError } = await supabase.auth.getUser()

      if (userError || !user) {
        console.error("Erreur lors de la récupération de l'utilisateur:", userError?.message)
        toast.error(userError?.message || "Utilisateur non trouvé.")
        router.push('/auth/login') // Redirect to login if user is not found
        setIsLoading(false)
        return
      }

      const { error: updateError } = await supabase.auth.updateUser({
        data: { 
          first_name: values.firstName,
          last_name: values.lastName,
        }
      })

      if (updateError) {        
        console.error("Erreur lors de la mise à jour du profil:", updateError.message)
        toast.error(updateError.message || "Erreur lors de la mise à jour du profil.")
        setIsLoading(false)
      } else {
        toast.success("Profil mis à jour avec succès !")
        const nextUrl = '/dashboard';
        router.push(nextUrl);        
      }
    } catch (err) {
      console.error("Erreur inattendue lors de la mise à jour du profil:", err)
      toast.error("Une erreur inattendue est survenue.")
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input
                  placeholder="Votre prénom"
                  disabled={isLoading}
                  {...field}
                />
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
                <Input
                  placeholder="Votre nom"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Enregistrer et continuer
        </Button>
      </form>
    </Form>
  )
} 