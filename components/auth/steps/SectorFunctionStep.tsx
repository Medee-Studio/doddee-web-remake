import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

interface SectorFunctionStepProps {
  form: UseFormReturn<FormData>;
  sectorSection: any;
  functionSection: any;
}

export default function SectorFunctionStep({ form, sectorSection, functionSection }: SectorFunctionStepProps) {
  const [selectedMainSector, setSelectedMainSector] = useState<string>("");

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

  const functionContent = functionSection.content as {
    label: string;
    placeholder: string;
    options: Array<{
      value: string;
      label: string;
    }>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl text-gray-700">
          Secteur et fonction
        </CardTitle>
        <p className="text-gray-500">
          Précisez votre secteur d'activité et votre rôle dans l'entreprise
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Votre secteur d'activité
          </h3>

          <FormField
            control={form.control}
            name="secteur_principal"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>Secteur principal</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setSelectedMainSector(value);
                    form.setValue("sous_secteur", "");
                  }}
                  value={field.value}
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

          {(selectedMainSector || form.getValues("secteur_principal")) && (
            <FormField
              control={form.control}
              name="sous_secteur"
              render={({ field }) => {
                const currentMainSector = selectedMainSector || form.getValues("secteur_principal");
                const selectedSectorData = sectorContent.options.find(
                  (sector) => sector.label === currentMainSector
                );
                return (
                  <FormItem>
                    <FormLabel>Sous-secteur</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
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
                );
              }}
            />
          )}
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Votre fonction
          </h3>
          <FormField
            control={form.control}
            name="fonction"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">{functionContent.label}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
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
  );
} 