"use client";

import { Kpi, KpiPayload, ToSendSupabase, FormDataKpisType } from "@/types";
import { handleFormRequest } from "@/lib/auth/client";
import { upsertKpis } from "@/lib/supabase/queries";
import { formDataKpis } from "@/lib/form-data/kpis";
import { getKpiValueByLabel } from "@/lib/helpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import GoBackButton from "./go-back-button";
import KpisDialog from "./kpis-dialog";

export default function KpisForm({ kpis }: { kpis: Kpi[] | null }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formIdx, setFormIdx] = useState<number>(0);
  const [currentFormData, setCurrentFormData] = useState<FormDataKpisType>(
    formDataKpis[formIdx],
  );
  const [kpisFormResponse, setKpisFormResponse] = useState<ToSendSupabase[]>([
    {
      supabaseTableName: "utilisateurs_moraux_kpis",
      payload: [],
    },
  ]);

  useEffect(() => {
    setCurrentFormData(formDataKpis[formIdx]);
  }, [formIdx]);

  useEffect(() => {
    const handleUpsert = async () => {
      // Count expected total KPIs across all forms
      const totalExpectedKpis = formDataKpis.reduce((acc, form) => acc + form.content.length, 0);
      
      if (kpisFormResponse[0].payload.length >= totalExpectedKpis) {
        setIsSubmitting(true);
        
        // Process payload to handle empty values
        kpisFormResponse[0].payload.forEach((elt, i) => {
          if (kpisFormResponse[0].payload[i].kpi_value === "") {
            kpisFormResponse[0].payload[i].kpi_value = -1;
          }
        });

        await handleFormRequest(kpisFormResponse, upsertKpis, router);
        setIsSubmitting(false);
      }
    };

    handleUpsert();
  }, [formIdx, kpisFormResponse, router]);

  const isFormFinished = () => {
    return formIdx + 1 >= formDataKpis.length;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const responses = Object.fromEntries(formData.entries());
    const payload: KpiPayload[] = [];
    
    Object.entries(responses).forEach(([key, value]) => {
      payload.push({
        kpi_label: key,
        kpi_value: value as string,
        kpi_type: currentFormData.kpi_type,
      });
    });

    setKpisFormResponse((prev) => {
      const updatedPayload = [...prev[0].payload, ...payload];
      return [{ ...prev[0], payload: updatedPayload }];
    });

    if (!isFormFinished()) {
      e.currentTarget.reset();
      setFormIdx(formIdx + 1);
      setIsSubmitting(false);
    }
  };

  const getTypeEmoji = (type: string) => {
    switch (type) {
      case 'environnement': return '♻️';
      case 'social': return '🤝🏼';
      case 'gouvernance': return '⏱️';
      default: return '📊';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'environnement': return 'Environnement';
      case 'social': return 'Social';
      case 'gouvernance': return 'Gouvernance';
      default: return 'KPI';
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] p-4">
      {formIdx < formDataKpis.length && (
        <Card className="min-w-[400px] w-full max-w-2xl relative">
          <GoBackButton formIdx={formIdx} setFormIdx={setFormIdx} />
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">{getTypeEmoji(currentFormData.kpi_type)}</span>
              <span className="text-sm px-3 py-1 bg-secondary rounded-full">
                {getTypeLabel(currentFormData.kpi_type)}
              </span>
            </div>
            <CardTitle className="text-xl">
              Indicateurs {getTypeLabel(currentFormData.kpi_type).toLowerCase()}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Étape {formIdx + 1} sur {formDataKpis.length}
            </p>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {currentFormData.content.map((item, key) => {
                const kpiDefaultValue = getKpiValueByLabel(
                  kpis,
                  item.supabaseColumnName,
                );
                
                return (
                  <div key={key} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor={item.supabaseColumnName} className="text-sm font-medium">
                        {item.label}
                      </Label>
                      <KpisDialog item={item} formIdx={formIdx} />
                    </div>

                    <Input
                      id={item.supabaseColumnName}
                      type={item.type}
                      placeholder={item.placeholder}
                      name={item.supabaseColumnName}
                      min={0}
                      step={item.type === 'number' ? (item.label.includes('%') ? 0.1 : 1) : undefined}
                      defaultValue={kpiDefaultValue || ""}
                      pattern="[0-9]*[,.]?[0-9]*"
                      inputMode="decimal"
                      onInput={(e) => {
                        // Only allow digits and a single comma/dot
                        const input = e.currentTarget as HTMLInputElement;
                        input.value = input.value
                          .replace(/[^\d,.]/g, "") // Remove anything that's not a digit, comma, or dot
                          .replace(/([,.].*)[,.]/g, "$1"); // Allow only one comma or dot
                      }}
                      className="w-full"
                    />
                  </div>
                );
              })}
            </CardContent>
            
            <CardFooter className="mt-6">
              {isSubmitting ? (
                <ButtonLoading size="full" className="w-full">
                  {isFormFinished() ? 'Sauvegarde...' : 'Chargement...'}
                </ButtonLoading>
              ) : (
                <Button type="submit" className="w-full">
                  {isFormFinished() ? 'Terminer' : 'Suivant'}
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>
      )}
    </div>
  );
}