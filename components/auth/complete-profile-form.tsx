"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Loader2, Check, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { completeProfileFormData } from "@/lib/form-data/complete-profile";
import { Address } from "@/types";

// Types
interface FormData {
  raison_sociale: string;
  tel: string;
  siren: string;
  adresse: string;
  annee_de_creation: number;
  labels: number[];
  secteur_principal: string;
  sous_secteur: string;
  fonction: string;
  categories: string[];
}

interface StepConfig {
  id: number;
  title: string;
  description: string;
}

interface CategoryAnswers {
  [key: string]: string;
}

// Dynamic imports for step components
import CompanyInfoStep from "@/components/auth/steps/CompanyInfoStep";
import LabelsStep from "@/components/auth/steps/LabelsStep";
import SectorFunctionStep from "@/components/auth/steps/SectorFunctionStep";
import CategoriesStep from "@/components/auth/steps/CategoriesStep";

const STEPS: StepConfig[] = [
  { id: 1, title: "Votre entreprise", description: "Informations et coordonnées" },
  { id: 2, title: "Vos pratiques actuelles", description: "Labels et certifications" },
  { id: 3, title: "Secteur et fonction", description: "Votre secteur d'activité et fonction" },
  { id: 4, title: "Votre catégorie", description: "Caractéristiques de votre entreprise" },
];

export function CompleteProfileForm() {
  // State
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [categoryAnswers, setCategoryAnswers] = useState<CategoryAnswers>({});
  const router = useRouter();

  // Form
  const form = useForm<FormData>({
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
      categories: [],
    },
  });

  // Get form sections
  const [companyInfo, labelsSection, sectorSection, functionSection, categoriesSection] = completeProfileFormData;

  // Validation functions
  const validateStep = (stepId: number): boolean => {
    const values = form.getValues();
    console.log("values", values)
    switch (stepId) {
      case 1:
        return !!(values.raison_sociale && values.tel && values.siren && values.annee_de_creation && values.adresse);
      case 2:
        return true; // Labels are optional
      case 3:
        return !!(values.secteur_principal && values.sous_secteur && values.fonction);
      case 4:
        const categoriesContent = categoriesSection.content as Array<{
          name: string;
          label: string;
          options: Array<{ label: string; value: string; }>;
        }>;
        return Object.keys(categoryAnswers).length === categoriesContent.length &&
               Object.values(categoryAnswers).every(answer => answer !== "");
      default:
        return false;
    }
  };

  // Event handlers
  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
    form.setValue("adresse", address.properties.label);
  };

  const handleCategoryAnswer = (categoryName: string, value: string) => {
    const newAnswers = { ...categoryAnswers, [categoryName]: value };
    setCategoryAnswers(newAnswers);

    const positiveCategories = Object.entries(newAnswers)
      .filter(([_, answer]) => answer === "true")
      .map(([category, _]) => category);

    form.setValue("categories", positiveCategories);
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps(prev => [...prev.filter(step => step !== currentStep), currentStep]);
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      toast.error("Veuillez remplir tous les champs obligatoires");
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkipStep = () => {
    if (currentStep === 2 && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Submit handler
  const onSubmit = async (values: FormData) => {
    try {
      setIsLoading(true);
      const supabase = createClient();
      
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        toast.error(userError?.message || "Utilisateur non trouvé.");
        router.push("/auth/login");
        return;
      }

      // Prepare data
      const coordinates = selectedAddress ? {
        longitude: selectedAddress.geometry.coordinates[0],
        latitude: selectedAddress.geometry.coordinates[1],
        properties: selectedAddress.properties,
      } : null;

      const labelsContent = labelsSection.content as Array<{
        id: number;
        label: string;
      }>;
      const labelNames = values.labels
        ?.map(labelId => {
          const label = labelsContent.find((l) => l.id === labelId);
          return label ? label.label : "";
        })
        .filter(Boolean) || [];

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
      };
      const mainSector = sectorContent.options.find((s) => s.label === values.secteur_principal);
      const subSector = mainSector?.children?.find((ss) => ss.label === values.sous_secteur);
      const mainSectorId = mainSector ? parseInt(mainSector.value, 10) : null;
      const subSectorId = subSector ? parseInt(subSector.value, 10) : null;

      // Insert into utilisateurs_moraux
      const { error: moralError } = await supabase
        .from("utilisateurs_moraux")
        .insert({
          user_id_moral: user.id,
          raison_sociale: values.raison_sociale,
          tel: values.tel,
          siren: values.siren,
          adresse: values.adresse,
          annee_de_creation: values.annee_de_creation,
          labels: labelNames,
          secteur_id: mainSectorId,
          sous_secteur_id: subSectorId,
          coordinates: coordinates,
        });

      if (moralError) {
        toast.error("Erreur lors de l'enregistrement des informations de l'entreprise.");
        return;
      }

      // Insert categories
      const categoriesData: any = { user_id: user.id };
      const categoriesContent = categoriesSection.content as Array<{
        name: string;
        label: string;
        options: Array<{ label: string; value: string; }>;
      }>;
      categoriesContent.forEach((category) => {
        categoriesData[category.name] = values.categories?.includes(category.name) ?? false;
      });

      const { error: categoriesError } = await supabase
        .from("utilisateurs_moraux_categories")
        .insert(categoriesData);

      if (categoriesError) {
        toast.error("Erreur lors de l'enregistrement de vos catégories.");
        return;
      }

      // Insert into utilisateurs_physiques
      const { error: physicalError } = await supabase
        .from("utilisateurs_physiques")
        .insert({
          fonction: values.fonction,
          user_id_moral: user.id,
        });

      if (physicalError) {
        toast.error("Erreur lors de l'enregistrement de votre fonction.");
        return;
      }

      // Update user metadata
      const { error: updateError } = await supabase.auth.updateUser({
        data: { profile_completed: true },
      });

      if (updateError) {
        toast.error("Erreur lors de la finalisation du profil.");
        return;
      }

      toast.success("Profil complété avec succès !");
      router.push("/dashboard");
    } catch (err) {
      toast.error("Une erreur inattendue est survenue.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper functions
  const isStepCompleted = (stepId: number) => completedSteps.includes(stepId);
  const isCurrentStepValid = validateStep(currentStep);

  return (
    <div className="flex h-screen">
      {/* Main Form Area */}
      <div className="md:w-2/3 w-full p-8 overflow-y-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 ${
                    currentStep === step.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : isStepCompleted(step.id)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-gray-300 text-gray-400"
                  }`}>
                    {isStepCompleted(step.id) ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <span className="text-lg font-semibold">{step.id}</span>
                    )}
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-medium ${
                      currentStep === step.id ? "text-primary" : "text-gray-600"
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

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {currentStep === 1 && (
              <CompanyInfoStep
                form={form}
                companyInfo={companyInfo}
                isLoading={isLoading}
                onAddressSelect={handleAddressSelect}
              />
            )}

            {currentStep === 2 && (
              <LabelsStep
                form={form}
                labelsSection={labelsSection}
              />
            )}

            {currentStep === 3 && (
              <SectorFunctionStep
                form={form}
                sectorSection={sectorSection}
                functionSection={functionSection}
              />
            )}

            {currentStep === 4 && (
              <CategoriesStep
                categoriesSection={categoriesSection}
                categoryAnswers={categoryAnswers}
                onCategoryAnswer={handleCategoryAnswer}
              />
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 pb-6">
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

                {currentStep < 4 ? (
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
                    {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                    TERMINER
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>

      {/* Right Sidebar */}
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
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              À quoi servent ces questions ?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              À mieux connaître votre entreprise pour vous proposer un accompagnement RSE hautement personnalisé.
            </p>
          </div>

          <div className="space-y-4">
            {STEPS.map((step) => (
              <div key={step.id} className="flex items-center space-x-4 p-3 rounded-lg bg-white/50">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isStepCompleted(step.id)
                    ? "bg-primary text-primary-foreground"
                    : currentStep === step.id
                    ? "bg-primary/20"
                    : "bg-gray-200"
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
                    currentStep === step.id ? "text-gray-900" : "text-gray-600"
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
