import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
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

interface LabelsStepProps {
  form: UseFormReturn<FormData>;
  labelsSection: any;
}

export default function LabelsStep({ form, labelsSection }: LabelsStepProps) {
  const labelsContent = labelsSection.content as Array<{
    id: number;
    label: string;
  }>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl text-gray-700">
          Vos pratiques actuelles
        </CardTitle>
        <p className="text-gray-500">
          Sélectionnez vos labels et certifications
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {labelsSection.formName}
          </h3>
          <p className="text-gray-500 mb-4">
            (Plusieurs choix possibles)
          </p>
          <FormField
            control={form.control}
            name="labels"
            render={() => (
              <FormItem>
                <div className="space-y-3">
                  {labelsContent.map((label, index) => (
                    <div key={label.id}>
                      <FormField
                        key={label.id}
                        control={form.control}
                        name="labels"
                        render={({ field }) => {
                          return (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(label.id)}
                                  onCheckedChange={(checked: boolean) => {
                                    return checked
                                      ? field.onChange([
                                          ...(field.value || []),
                                          label.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== label.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {label.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                      {index < labelsContent.length - 1 && (
                        <div className="border-b border-gray-200 pt-3" />
                      )}
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
} 