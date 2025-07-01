import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddressInput } from "@/components/ui/address-input";
import { Address } from "@/types";

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

interface CompanyInfoStepProps {
  form: UseFormReturn<FormData>;
  companyInfo: any;
  isLoading: boolean;
  onAddressSelect: (address: Address) => void;
}

export default function CompanyInfoStep({ form, companyInfo, isLoading, onAddressSelect }: CompanyInfoStepProps) {
  const companyContent = companyInfo.content as Array<{
    label: string;
    type: string;
    placeholder: string;
    name: string;
  }>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl text-gray-700">
          Information sur votre entreprise
        </CardTitle>
        <p className="text-gray-500">
          Renseignez les informations de base et l'adresse de votre entreprise
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {companyContent.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as keyof FormData}
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
                        const value =
                          field.type === "number"
                            ? e.target.value === ""
                              ? undefined
                              : Number(e.target.value)
                            : e.target.value;
                        formField.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Adresse de l'entreprise
          </h3>
          <FormField
            control={form.control}
            name="adresse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse complète</FormLabel>
                <FormControl>
                  <AddressInput
                    onSelectAddress={onAddressSelect}
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
  );
} 