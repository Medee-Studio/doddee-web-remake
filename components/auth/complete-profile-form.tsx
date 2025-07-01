"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useWatch } from "react-hook-form"
import { Loader2, Check, ChevronRight } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { completeProfileSchema, completeProfileFormData, type CompleteProfileFormData } from "@/lib/form-data/complete-profile"
import { AddressInput } from "@/components/ui/address-input"
import { Address } from "@/types"

const STEPS = [
  { id: 1, title: "Votre entreprise", description: "Informations et coordonnées" },
  { id: 2, title: "Vos pratiques actuelles", description: "Labels et certifications" },
  { id: 3, title: "Secteur et fonction", description: "Votre secteur d'activité et fonction" },
]

export function CompleteProfileForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [selectedMainSector, setSelectedMainSector] = useState<string>("")
  const router = useRouter()

  const form = useForm<CompleteProfileFormData>({
    resolver: zodResolver(completeProfileSchema),
    defaultValues: {
      raison_sociale: "",
      tel: "",
      siren: "",
      adresse: "",
      annee_de_creation: new Date().getFullYear(),
      labels: [],
      secteur_principal: "",
      sous_secteur: "",
      fonction: "",
    },
  })

  // Get form sections with proper typing
  const [companyInfo, labelsSection, sectorSection, functionSection] = completeProfileFormData

  // Type assertions for better type safety
  const companyContent = companyInfo.content as Array<{
    label: string;
    type: string;
    placeholder: string;
    name: string;
  }>
  
  const labelsContent = labelsSection.content as Array<{
    id: number;
    label: string;
  }>
  
  const sectorContent = sectorSection.content as {
    label: string;
    placeholder: string;
    options: Array<{
      value: string;
      label: string;
      children?: Array<{
        value: string;
        label: string;
      }>;
    }>;
  }
  
  const functionContent = functionSection.content as {
    label: string;
    placeholder: string;
    options: Array<{
      value: string;
      label: string;
    }>;
  }

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address)
    form.setValue("adresse", address.properties.label)
  }

  const validateCurrentStep = () => {
    const values = form.getValues()
    
    switch (currentStep) {
      case 1:
        // All company information fields + address are required
        return !!(values.raison_sociale && 
                 values.tel && 
                 values.siren && 
                 values.annee_de_creation)
                 //values.adresse)
      case 2:
        // Labels are optional, so this step is always valid
        return true
      case 3:
        // Main sector, sub-sector, and function are all required
        return !!(values.secteur_principal && 
                 values.sous_secteur && 
                 values.fonction)
      default:
        return false
    }
  }

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCompletedSteps(prev => [...prev.filter(step => step !== currentStep), currentStep])
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1)
      }
    } else {
      toast.error("Veuillez remplir tous les champs obligatoires")
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkipStep = () => {
    if (currentStep === 2) { // Only allow skipping labels step
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  async function onSubmit(values: CompleteProfileFormData) {
    try {
      setIsLoading(true)
      const supabase = createClient()
      const { data: { user }, error: userError } = await supabase.auth.getUser()

      if (userError || !user) {
        console.error("Erreur lors de la récupération de l'utilisateur:", userError?.message)
        toast.error(userError?.message || "Utilisateur non trouvé.")
        router.push('/auth/login')
        setIsLoading(false)
        return
      }

      // Prepare coordinates from selected address
      const coordinates = selectedAddress ? {
        longitude: selectedAddress.geometry.coordinates[0],
        latitude: selectedAddress.geometry.coordinates[1],
        properties: selectedAddress.properties
      } : null
      console.log("coordinates", coordinates)
      // Insert into utilisateurs_moraux table
      {/*
        
        const { data: moralUser, error: moralError } = await supabase
          .from('utilisateurs_moraux')
          .insert({
            raison_sociale: values.raison_sociale,
            tel: values.tel,
            siren: values.siren,
            adresse: values.adresse,
            annee_de_creation: values.annee_de_creation,
            labels: values.labels || [],
            secteurs: [values.sous_secteur],
            coordinates: coordinates
          })
          .select()
          .single()
          if (moralError) {
            console.error("Erreur lors de l'insertion de l'utilisateur moral:", moralError.message)
            toast.error("Erreur lors de l'enregistrement des informations de l'entreprise.")
            setIsLoading(false)
            return
          }
       


      // Insert into utilisateurs_physiques table
      const { error: physicalError } = await supabase
        .from('utilisateurs_physiques')
        .insert({
          fonction: values.fonction,
          id_user_moral: moralUser.id
        })

      if (physicalError) {
        console.error("Erreur lors de l'insertion de l'utilisateur physique:", physicalError.message)
        toast.error("Erreur lors de l'enregistrement de votre fonction.")
        setIsLoading(false)
        return
      }

      // Update the user's metadata to link to the moral user
      const { error: updateError } = await supabase.auth.updateUser({
        data: { 
          id_user_moral: moralUser.id,
          profile_completed: true
        }
      })

      if (updateError) {        
        console.error("Erreur lors de la mise à jour du profil utilisateur:", updateError.message)
        toast.error("Erreur lors de la finalisation du profil.")
        setIsLoading(false)
      } else {
        toast.success("Profil complété avec succès !")
        router.push('/dashboard')
      }
         */}
      console.log(values)
    } catch (err) {
      console.error("Erreur inattendue lors de la completion du profil:", err)
      toast.error("Une erreur inattendue est survenue.")
      setIsLoading(false)
    }
  }

  const isStepCompleted = (stepId: number) => completedSteps.includes(stepId)
  
  // Watch form values to make validation reactive
  const watchedValues = useWatch({
    control: form.control,
    name: ["raison_sociale", "tel", "siren", "annee_de_creation", "adresse", "secteur_principal", "sous_secteur", "fonction"]
  })
  
  // Calculate validation reactively based on watched values
  const isCurrentStepValid = (() => {
    const values = form.getValues()
    
    switch (currentStep) {
      case 1:
        // All company information fields + address are required
        return !!(values.raison_sociale && 
                 values.tel && 
                 values.siren && 
                 values.annee_de_creation)
                 //values.adresse)
      case 2:
        // Labels are optional, so this step is always valid
        return true
      case 3:
        // Main sector, sub-sector, and function are all required
        return !!(values.secteur_principal && 
                 values.sous_secteur && 
                 values.fonction)
      default:
        return false
    }
  })()

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Side - Forms (2/3 width) */}
      <div className="md:w-2/3 w-full p-8 overflow-y-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 ${
                    currentStep === step.id 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : isStepCompleted(step.id)
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-gray-300 text-gray-400'
                  }`}>
                    {isStepCompleted(step.id) ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <span className="text-lg font-semibold">{step.id}</span>
                    )}
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-medium ${
                      currentStep === step.id ? 'text-primary' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </div>
                {index < STEPS.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-400 mx-6" />
                )}
              </div>
            ))}
          </div>
          
          {/* Current Step Progress */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Company Information + Address */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-gray-700">Information sur votre entreprise</CardTitle>
                  <p className="text-gray-500">Renseignez les informations de base et l'adresse de votre entreprise</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {companyContent.map((field) => (
                      <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name as keyof CompleteProfileFormData}
                        render={({ field: formField }) => (
                          <FormItem>
                            <FormLabel>{field.label}</FormLabel>
                            <FormControl>
                              <Input
                                type={field.type}
                                placeholder={field.placeholder}
                                disabled={isLoading}
                                {...formField}
                                value={
                                  Array.isArray(formField.value) 
                                    ? "" 
                                    : typeof formField.value === "number" 
                                      ? formField.value.toString() 
                                      : formField.value || ""
                                }
                                onChange={(e) => {
                                  const value = field.type === "number" ? 
                                    (e.target.value === "" ? undefined : Number(e.target.value)) : 
                                    e.target.value
                                  formField.onChange(value)
                                }}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  
                  {/* Address Section */}
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Adresse de l'entreprise</h3>
                    <FormField
                      control={form.control}
                      name="adresse"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adresse complète</FormLabel>
                          <FormControl>
                            <AddressInput 
                              onSelectAddress={handleAddressSelect} 
                              value={field.value}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Labels Only */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-gray-700">Vos pratiques actuelles</CardTitle>
                  <p className="text-gray-500">Sélectionnez vos labels et certifications</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Labels Section */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">{labelsSection.formName}</h3>
                    <p className="text-gray-500 mb-4">(Plusieurs choix possibles)</p>
                    <FormField
                      control={form.control}
                      name="labels"
                      render={() => (
                        <FormItem>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-64 overflow-y-auto border rounded-lg p-4">
                            {labelsContent.map((label) => (
                              <FormField
                                key={label.id}
                                control={form.control}
                                name="labels"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={label.id}
                                      className="flex flex-row items-start space-x-3 space-y-0 p-2 border rounded-lg hover:bg-gray-50"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(label.id)}
                                          onCheckedChange={(checked: boolean) => {
                                            return checked
                                              ? field.onChange([...(field.value || []), label.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== label.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-xs font-normal cursor-pointer">
                                        {label.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Sector + Function */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl text-gray-700">Secteur et fonction</CardTitle>
                  <p className="text-gray-500">Précisez votre secteur d'activité et votre rôle dans l'entreprise</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Sector Selection */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Votre secteur d'activité</h3>
                    
                    {/* Main Sector Select */}
                    <FormField
                      control={form.control}
                      name="secteur_principal"
                      render={({ field }) => (
                        <FormItem className="mb-4">
                          <FormLabel>Secteur principal</FormLabel>
                          <Select 
                            onValueChange={(value) => {
                              field.onChange(value)
                              setSelectedMainSector(value)
                              // Reset sub-sector when main sector changes
                              form.setValue("sous_secteur", "")
                            }} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Sélectionnez votre secteur principal" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {sectorContent.options.map((sector) => (
                                <SelectItem key={sector.value} value={sector.label}>
                                  {sector.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Sub-Sector Select */}
                    {selectedMainSector && (
                      <FormField
                        control={form.control}
                        name="sous_secteur"
                        render={({ field }) => {
                          const selectedSectorData = sectorContent.options.find(
                            (sector) => sector.label === selectedMainSector
                          )
                          return (
                            <FormItem>
                              <FormLabel>Sous-secteur</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12">
                                    <SelectValue placeholder="Sélectionnez votre sous-secteur" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {selectedSectorData?.children?.map((subsector) => (
                                    <SelectItem key={subsector.value} value={subsector.label}>
                                      {subsector.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )
                        }}
                      />
                    )}
                  </div>

                  {/* Function Section */}
                  <div className="pt-4 border-t">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Votre fonction</h3>
                    <FormField
                      control={form.control}
                      name="fonction"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">{functionContent.label}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder={functionContent.placeholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {functionContent.options.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handlePreviousStep}
                disabled={currentStep === 1}
                className="px-8 h-12"
              >
                Précédent
              </Button>

              <div className="flex gap-4">
                {currentStep === 2 && (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleSkipStep}
                    className="px-6 h-12"
                  >
                    Ignorer cette étape
                  </Button>
                )}

                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    disabled={!isCurrentStepValid}
                    className="px-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold"
                  >
                    VALIDER
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isLoading || !isCurrentStepValid}
                    className="px-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold"
                  >
                    {isLoading && (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    )}
                    TERMINER
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>

      {/* Right Side - Progress Indicator (1/3 width) */}
      <div className="md:w-1/3 hidden bg-blue-50 p-8 md:flex flex-col justify-center">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src={require("@/public/mascotte.png")}
              alt="Mascotte"
              width={120}
              height={120}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4">À quoi servent ces questions ?</h3>
            <p className="text-gray-600 leading-relaxed">
              À mieux connaître votre entreprise pour vous proposer un accompagnement RSE hautement personnalisé.
            </p>
          </div>

          <div className="space-y-4">
            {STEPS.map((step) => (
              <div key={step.id} className="flex items-center space-x-4 p-3 rounded-lg bg-white/50">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isStepCompleted(step.id) 
                    ? 'bg-primary text-primary-foreground' 
                    : currentStep === step.id
                    ? 'bg-primary/20'
                    : 'bg-gray-200'
                }`}>
                  {isStepCompleted(step.id) ? (
                    <Check className="w-5 h-5" />
                  ) : currentStep === step.id ? (
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  ) : (
                    <span className="text-sm font-medium text-gray-500">{step.id}</span>
                  )}
                </div>
                <div className="text-left">
                  <div className={`text-sm font-medium ${
                    currentStep === step.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 