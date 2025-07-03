"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2, Upload, X, Trash2, Mail } from "lucide-react"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import { getCompanyAccountInfo, updateCompanyAccountInfo, uploadCompanyLogo } from "@/lib/supabase/queries"
import { labels } from "@/lib/form-data/complete-profile"
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
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image"


const companyFormSchema = z.object({
  raisonSociale: z.string().min(2, { message: "La raison sociale doit contenir au moins 2 caractères" }),
  tel: z.string().min(10, { message: "Le numéro de téléphone doit contenir au moins 10 caractères" }),
  labels: z.array(z.string()),
})

type CompanyFormValues = z.infer<typeof companyFormSchema>



export function AccountForm({ user }: { user: User }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [isPristine, setIsPristine] = useState(true)
  const [logo, setLogo] = useState<string | null>(null)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoUploading, setLogoUploading] = useState(false)
  const [labelsOpen, setLabelsOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [initialLogo, setInitialLogo] = useState<string | null>(null)
  const router = useRouter()
  
  // Store initialValues in state so we can update it after a successful save
  const [initialValues, setInitialValues] = useState({
    raisonSociale: "",
    tel: "",
    labels: [] as string[],
  })

  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues: initialValues,
  })

  // Load company data on component mount
  useEffect(() => {
    async function loadCompanyData() {
      try {
        const supabase = createClient()
        const companyData = await getCompanyAccountInfo(supabase)
        if (companyData) {
          const newInitialValues = {
            raisonSociale: companyData.raison_sociale || "",
            tel: companyData.tel || "",
            labels: companyData.labels || [],
          }
          
          setInitialValues(newInitialValues)
          form.reset(newInitialValues)
          setLogo(companyData.logo)
          setInitialLogo(companyData.logo)
        }
      } catch (error) {
        console.error("Error loading company data:", error)
        toast.error("Erreur lors du chargement des données")
      } finally {
        setIsLoadingData(false)
      }
    }

    loadCompanyData()
  }, [form])

  // Monitor form changes to determine if pristine
  useEffect(() => {
    const subscription = form.watch((value) => {
      const currentValues = {
        raisonSociale: value.raisonSociale || "",
        tel: value.tel || "",
        labels: value.labels || [],
      }
      const currentInitialValues = {
        raisonSociale: initialValues.raisonSociale || "",
        tel: initialValues.tel || "",
        labels: initialValues.labels || [],
      }
      
      const hasFormChanges = (
        currentValues.raisonSociale !== currentInitialValues.raisonSociale || 
        currentValues.tel !== currentInitialValues.tel ||
        JSON.stringify(currentValues.labels) !== JSON.stringify(currentInitialValues.labels)
      )
      
      const hasLogoChanges = logoFile !== null || logo !== initialLogo
      
      setIsPristine(!hasFormChanges && !hasLogoChanges)
    })
    return () => subscription.unsubscribe()
  }, [form, initialValues, logoFile, logo, initialLogo])

  // Separate effect to immediately update pristine state when logo changes
  useEffect(() => {
    const hasLogoChanges = logoFile !== null || logo !== initialLogo
    if (hasLogoChanges) {
      setIsPristine(false)
    }
  }, [logoFile, logo, initialLogo])

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Le fichier doit faire moins de 5MB")
        return
      }
      
      // Check file type
      if (!file.type.startsWith('image/')) {
        toast.error("Veuillez sélectionner un fichier image")
        return
      }
      
      setLogoFile(file)
      
      // Create preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogo(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeLogo = () => {
    setLogoFile(null)
    setLogo(null)
  }

  const addLabel = (labelToAdd: string) => {
    const currentLabels = form.getValues('labels') as string[]
    if (!currentLabels.includes(labelToAdd)) {
      form.setValue('labels', [...currentLabels, labelToAdd])
    }
    setLabelsOpen(false)
  }

  const removeLabel = (labelToRemove: string) => {
    const currentLabels = form.getValues('labels') as string[]
    form.setValue('labels', currentLabels.filter(label => label !== labelToRemove))
  }

  async function onSubmit(values: CompanyFormValues) {
    if (isPristine) return

    try {
      setIsLoading(true)
      const supabase = createClient()
      
      let logoPath = null
      let logoUrl = logo
      let shouldUpdateLogo = false
      
      // Upload logo if there's a new file
      if (logoFile) {
        setLogoUploading(true)
        const uploadResult = await uploadCompanyLogo(supabase, logoFile)
        
        if (!uploadResult.success) {
          toast.error(uploadResult.error || 'Error uploading logo')
          return
        }
        
        logoPath = uploadResult.filePath || null
        shouldUpdateLogo = true
        
        // Get the signed URL for display (works for private buckets)
        if (logoPath) {
          // Remove "logos/" prefix if it exists since we use from('logos')
          const logoFileName = logoPath.startsWith('logos/') ? logoPath.replace('logos/', '') : logoPath;
          const { data: signedUrlData, error: urlError } = await supabase.storage
            .from('logos')
            .createSignedUrl(logoFileName, 60 * 60 * 24); // Expires in 24 hours
          
          if (!urlError && signedUrlData?.signedUrl) {
            logoUrl = signedUrlData.signedUrl;
          } else {
            console.error('Error creating signed URL:', urlError);
            logoUrl = null;
          }
        }
        setLogoUploading(false)
      } else if (logo !== initialLogo) {
        // Logo was removed or changed without uploading new file
        logoPath = null
        shouldUpdateLogo = true
        logoUrl = null
      }

      const updateResult = await updateCompanyAccountInfo(supabase, {
        raison_sociale: values.raisonSociale,
        tel: values.tel,
        labels: values.labels,
        ...(shouldUpdateLogo && { logoPath: logoPath })
      })

      if ('error' in updateResult) {
        toast.error(updateResult.error || "Échec de la mise à jour du profil")
      } else {
        toast.success("Profil entreprise mis à jour avec succès")
        
        // Update initialValues with new values to properly track pristine state
        const newInitialValues = {
          raisonSociale: values.raisonSociale,
          tel: values.tel,
          labels: values.labels,
        }
        
        setInitialValues(newInitialValues)
        form.reset(newInitialValues)
        setLogoFile(null)
        setLogo(logoUrl)
        setInitialLogo(logoUrl)
        setIsPristine(true)
        
        router.refresh() 
      }
    } catch (err) {
      console.error("Erreur inattendue lors de la mise à jour du profil:", err)
      toast.error("Une erreur inattendue est survenue")
    } finally {
      setIsLoading(false)
      setLogoUploading(false)
    }
  }

  const isOAuthUser = user?.app_metadata?.provider !== 'email' && user?.app_metadata?.provider !== undefined;

  if (isLoadingData) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informations de l&apos;entreprise</CardTitle>
          <CardDescription>
            Mettez à jour les informations de votre entreprise.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="raisonSociale"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Raison sociale</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez la raison sociale" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="tel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez le numéro de téléphone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <FormLabel>Email</FormLabel>
                <div className="mt-1 flex h-10 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground">
                  {user?.email}
                </div>
                <FormDescription className="text-xs mt-1">
                  Votre email ne peut pas être modifié.
                </FormDescription>
              </div>

              <div>
                <FormLabel>Logo de l&apos;entreprise</FormLabel>
                <div className="mt-2 space-y-2">
                  {logo && (
                    <div className="relative w-24 h-24">
                      <Image 
                        src={logo} 
                        alt="Logo" 
                        className="object-cover rounded-md border"
                        width={96}
                        height={96}
                      />
                      <button
                        type="button"
                        onClick={removeLogo}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {logo ? 'Changer le logo' : 'Télécharger un logo'}
                    </label>
                  </div>
                  <FormDescription className="text-xs">
                    Format accepté: JPG, PNG, GIF. Taille maximale: 5MB.
                  </FormDescription>
                </div>
              </div>

              <div>
                <FormLabel>Certifications et labels</FormLabel>
                <div className="mt-2 space-y-2">
                                    <div className="flex flex-wrap gap-2">
                    {(form.watch('labels') as string[] || []).filter(Boolean).map((label, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {label}
                        <button
                          type="button"
                          onClick={() => removeLabel(label)}
                          className="ml-1 hover:text-red-500"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <Popover open={labelsOpen} onOpenChange={setLabelsOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        role="combobox"
                        aria-expanded={labelsOpen}
                      >
                        Ajouter un label ou certification
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[400px] p-0">
                      <Command>
                        <CommandInput placeholder="Rechercher un label..." />
                        <CommandEmpty>Aucun label trouvé.</CommandEmpty>
                        <CommandList>
                          <CommandGroup>
                            {labels
                              .filter(label => !(form.watch('labels') as string[] || []).includes(label))
                              .map((label) => (
                              <CommandItem
                                key={label}
                                value={label}
                                onSelect={() => addLabel(label)}
                              >
                                {label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription className="text-xs">
                    Sélectionnez vos certifications et labels parmi la liste prédéfinie.
                  </FormDescription>
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="sm" variant="outline" disabled={isLoading || isPristine || logoUploading}>
                  {isLoading || logoUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {logoUploading ? 'Téléchargement...' : 'Enregistrement...'}
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

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">Zone de danger</CardTitle>
          <CardDescription>
            Actions irréversibles concernant votre compte.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <h4 className="text-sm font-medium text-red-600">Supprimer mon compte</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Une fois supprimé, votre compte ne pourra pas être récupéré.
            </p>
            <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Supprimer mon compte
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-red-600">
                    <Trash2 className="h-5 w-5" />
                    Suppression de compte
                  </DialogTitle>
                  <DialogDescription className="text-left space-y-4">
                    Pour supprimer votre compte, veuillez nous contacter par email à l&apos;adresse suivante :
                    
                      <br/>
                      <span className="font-medium underline">contact@doddee.fr</span>
                    
                    <span className="text-sm">
                      Notre équipe traitera votre demande dans les plus brefs délais. 
                      Cette action est irréversible et toutes vos données seront définitivement supprimées.
                    </span>
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>
                    Fermer
                  </Button>
                  <Button 
                    onClick={() => window.open('mailto:contact@doddee.fr?subject=Demande de suppression de compte')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Envoyer un email
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 