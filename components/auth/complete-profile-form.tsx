"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { submitCompleteProfile } from "@/lib/supabase/queries";
import { toast } from "sonner";
import Image from "next/image";
import mascotte from "@/public/mascotte.png";
import {
  labels,
  secteurs,
  sous_secteurs,
  fonctions,
  categoryQuestions,
  steps,
} from "@/lib/form-data/complete-profile";
import { useRouter } from "next/navigation";
import { AddressInput } from "@/components/ui/address-input";

const completeProfileSchema = z.object({
  // Step 1: Company Info
  raison_sociale: z.string().min(1, "La raison sociale est requise"),
  tel: z
    .string()
    .min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres"),
  siren: z
    .string()
    .min(9, "Le SIREN doit contenir 9 chiffres")
    .max(9, "Le SIREN ne doit pas dépasser 9 chiffres"),
  adresse: z.string().min(1, "L'adresse est requise"),
  coordonnees: z.array(z.number()).length(2),
  annee_de_creation: z.coerce
    .number()
    .min(1800, "Année invalide")
    .max(new Date().getFullYear(), "Année invalide"),

  // Step 2: Labels
  labels: z.array(z.string()),

  // Step 3: Sector and Function
  secteur: z.string().min(1, "Le secteur est requis"),
  sous_secteur: z.string().min(1, "Le sous-secteur est requis"),
  fonction: z.string().min(1, "La fonction est requise"),

  // Step 4: Categories
  flotte_vehicule: z.boolean(),
  plus_de_un_salarie: z.boolean(),
  locaux: z.boolean(),
  parc_informatique: z.boolean(),
  site_web: z.boolean(),
  site_de_production: z.boolean(),
  approvisionnement: z.boolean(),
  distribution: z.boolean(),
  stock: z.boolean(),
});

type FormData = z.infer<typeof completeProfileSchema>;

export function CompleteProfileForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSector, setSelectedSector] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(completeProfileSchema),
    defaultValues: {
      raison_sociale: "",
      tel: "",
      siren: "",
      adresse: "",
      coordonnees: [],
      annee_de_creation: new Date().getFullYear(),
      labels: [],
      secteur: "",
      sous_secteur: "",
      fonction: "",
      flotte_vehicule: false,
      plus_de_un_salarie: false,
      locaux: false,
      parc_informatique: false,
      site_web: false,
      site_de_production: false,
      approvisionnement: false,
      distribution: false,
      stock: false,
    },
  });

  // Sync selectedSector with form data
  useEffect(() => {
    const secteurValue = form.watch("secteur");
    if (secteurValue && secteurValue !== selectedSector) {
      setSelectedSector(secteurValue);
    }
  }, [form.watch("secteur"), selectedSector]);

  const nextStep = async () => {
    let isValid = false;

    switch (currentStep) {
      case 1:
        isValid = await form.trigger([
          "raison_sociale",
          "tel",
          "siren",
          "adresse",
          "annee_de_creation",
        ]);
        break;
      case 2:
        isValid = true; // Labels are optional
        break;
      case 3:
        isValid = await form.trigger(["secteur", "sous_secteur", "fonction"]);
        break;
      case 4:
        isValid = await form.trigger();
        break;
    }

    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else if (isValid && currentStep === 4) {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const formData = form.getValues();
      const supabase = createClient();

      console.log(formData);
      {/* TODO: Add a loading state 
      const result = await submitCompleteProfile(supabase, formData);

      if ("success" in result) {
        const { error: updateError } = await supabase.auth.updateUser({
          data: { profile_completed: true },
        });

        if (updateError) {
          toast.error("Erreur lors de la finalisation du profil.");
          return;
        }

        toast.success("Profil complété avec succès!");
        // Redirect to dashboard or next page
        router.push("/dashboard");
      } else {
        toast.error(result.error || "Une erreur est survenue");
      }
        */}
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Une erreur est survenue lors de la soumission");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="raison_sociale"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#64748b]">
                    Raison sociale
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Entrez votre raison sociale"
                      className="mt-2 h-12 border-[#cbd5e1] focus:border-primary focus:ring-primary"
                      {...field}
                    />
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
                  <FormLabel className="text-sm font-medium text-[#64748b]">
                    Téléphone
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="06 XX XX XX XX"
                      className="mt-2 h-12 border-[#cbd5e1] focus:border-primary focus:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="siren"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#64748b]">
                    SIREN
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Entrez votre SIREN"
                      className="mt-2 h-12 border-[#cbd5e1] focus:border-primary focus:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="adresse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#64748b]">
                    Adresse
                  </FormLabel>
                  <FormControl>
                    <AddressInput
                      value={field.value}
                      onChange={field.onChange}
                      onCoordinatesChange={(coordinates) => {
                        form.setValue("coordonnees", coordinates);
                      }}
                      placeholder="Entrez votre adresse"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="annee_de_creation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#64748b]">
                    Année de création
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Entrez l'année de création"
                      className="mt-2 h-12 border-[#cbd5e1] focus:border-primary focus:ring-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="labels"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#64748b]">
                    Sélectionnez vos labels et certifications
                  </FormLabel>
                  <div className="mt-4 overflow-y-auto rounded-md border p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {labels.map((label, index) => (
                        <FormItem
                          key={`label-${index}-${label}`}
                          className="flex flex-row items-start space-x-3 space-y-0 p-3 rounded-md border"
                        >
                          <FormControl>
                            <Checkbox
                              id={`label-checkbox-${index}`}
                              checked={Array.isArray(field.value) && field.value.includes(label)}
                              onCheckedChange={(checked) => {
                                const currentValues = Array.isArray(field.value) ? field.value : [];
                                if (checked) {
                                  field.onChange([...currentValues, label]);
                                } else {
                                  field.onChange(
                                    currentValues.filter(
                                      (value) => value !== label
                                    )
                                  );
                                }
                              }}
                              className="border-[#cbd5e1] data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            />
                          </FormControl>
                          <FormLabel 
                            htmlFor={`label-checkbox-${index}`}
                            className="text-sm font-normal text-[#64748b] leading-relaxed cursor-pointer"
                          >
                            {label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="fonction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="fonction-select">Votre fonction</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || undefined}
                  >
                    <FormControl>
                      <SelectTrigger id="fonction-select">
                        <SelectValue placeholder="Sélectionnez votre fonction" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {fonctions.map((option) => (
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

            <FormField
              control={form.control}
              name="secteur"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="secteur-select">Secteur principal</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedSector(value);
                      form.setValue("sous_secteur", "");
                    }}
                    value={field.value || undefined}
                  >
                    <FormControl>
                      <SelectTrigger id="secteur-select">
                        <SelectValue placeholder="Sélectionnez votre secteur" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {secteurs.map((option) => (
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

            {selectedSector && (
              <FormField
                control={form.control}
                name="sous_secteur"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="sous-secteur-select">Sous-secteur</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || undefined}
                    >
                      <FormControl>
                        <SelectTrigger id="sous-secteur-select">
                          <SelectValue placeholder="Sélectionnez votre sous-secteur"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {(sous_secteurs[selectedSector] || []).map((option) => (
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
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            {categoryQuestions.map((question) => (
              <FormField
                key={question.name}
                control={form.control}
                name={question.name}
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>{question.label}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) =>
                          field.onChange(value === "true")
                        }
                        value={field.value ? "true" : "false"}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="true"
                            id={`${question.name}-true`}
                          />
                          <Label htmlFor={`${question.name}-true`}>Oui</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="false"
                            id={`${question.name}-false`}
                          />
                          <Label htmlFor={`${question.name}-false`}>Non</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const currentStepData = steps.find((step) => step.id === currentStep);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-screen">
      {/* Form Section - 2/3 width */}
      <div className="lg:col-span-2 p-8 overflow-y-auto">
        {/* Step Navigation */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium border-2 ${
                      step.id === currentStep
                        ? "border-primary bg-primary text-white"
                        : step.id < currentStep
                        ? "border-primary bg-primary text-white"
                        : "border-[#cbd5e1] bg-[#f1f5f9] text-[#64748b]"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <CheckIcon className="w-3 h-3" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      step.id === currentStep
                        ? "text-primary"
                        : step.id < currentStep
                        ? "text-primary"
                        : "text-[#64748b]"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="mx-4 flex-1 h-px bg-[#cbd5e1]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="shadow-sm border-[#cbd5e1]">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-semibold text-[#64748b]">
              {currentStepData?.title}
            </CardTitle>
            <CardDescription className="text-[#64748b]">
              {currentStepData?.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <Form {...form}>
              <form className="space-y-8">
                {renderStepContent()}

                <div className="flex items-center justify-between pt-8 border-t border-[#cbd5e1]">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="text-[#64748b] hover:text-primary"
                  >
                    Précédent
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    {currentStep === 4 ? "Terminer" : "Suivant"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1 bg-[#ebfaff] p-8 flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <Image
            src={mascotte}
            alt="Mascotte"
            width={160}
            height={160}
            className="mx-auto mb-6"
          />
          <h3 className="text-lg font-semibold text-[#64748b] mb-2">
            À quoi servent ces questions ?
          </h3>
          <p className="text-sm text-[#64748b] leading-relaxed">
            À mieux connaître votre entreprise pour vous proposer un
            accompagnement RSE hautement personnalisé.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center space-x-3">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  step.id <= currentStep
                    ? "border-primary bg-primary"
                    : "border-[#cbd5e1] bg-[#f1f5f9]"
                }`}
              />
              <span
                className={`text-sm ${
                  step.id <= currentStep ? "text-primary" : "text-[#64748b]"
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
