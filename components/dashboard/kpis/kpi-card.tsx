"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Calendar, Clock, History, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { UserKpiWithDetails } from "@/types";
import { canAddNewKpiResponse } from "@/lib/supabase/queries";
import { addKpiResponse } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { whichEmoji } from "@/lib/helpers";

interface KpiCardProps {
  kpi: UserKpiWithDetails;
}

export function KpiCard({ kpi }: KpiCardProps) {
  const [isAddingResponse, setIsAddingResponse] = useState(false);
  const [newResponse, setNewResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAllResponses, setShowAllResponses] = useState(false);
  const [isEvolutionDialogOpen, setIsEvolutionDialogOpen] = useState(false);
  const router = useRouter();

  const canAddResponse = canAddNewKpiResponse(kpi);
  const hasResponse = kpi.answer && kpi.answer.trim() !== "";
  const isNumeric = kpi.kpi_details.type === 'numeric';
  const hasMultipleResponses = kpi.all_responses && kpi.all_responses.length > 1;

  const handleAddResponse = async () => {
    if (!newResponse.trim()) {
      toast.error("Veuillez saisir une réponse.");
      return;
    }

    setIsLoading(true);
    try {
      const supabase = createClient();
      const result = await addKpiResponse(
        supabase,
        kpi.id_kpi,
        kpi.question || `Valeur pour ${kpi.kpi_details.nom}`,
        newResponse
      );

      if ('error' in result) {
        toast.error(result.error);
      } else {
        toast.success("Réponse ajoutée avec succès!");
        setNewResponse("");
        setIsAddingResponse(false);
        // Use router.refresh() instead of window.location.reload()
        router.refresh();
      }
    } catch (error) {
      console.error("Error adding response:", error);
      toast.error("Erreur lors de l'ajout de la réponse.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const formatDateShort = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    });
  };

  const getKpiIcon = () => {
    return whichEmoji(kpi.kpi_details.kpi_type);
  };

  const getKpiTitle = () => {
    const unit = kpi.kpi_details.unit;
    const nom = kpi.kpi_details.nom;
    return unit ? `${unit} ${nom}` : nom;
  };

  const getEvolutionData = () => {
    if (!kpi.all_responses) return [];
    
    return kpi.all_responses
      .map((response) => {
        const numericValue = parseFloat(response.answer);
        return {
          date: formatDateShort(response.created_at),
          value: isNaN(numericValue) ? 0 : numericValue,
          fullDate: formatDate(response.created_at),
          originalAnswer: response.answer
        };
      })
      .reverse(); // Reverse to show chronological order (oldest first)
  };

  return (
    <Card className="relative">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            {getKpiTitle()}
          </CardTitle>
          {canAddResponse && (
            <Badge variant="outline" className="ml-2 bg-[#ebfaff]">
              Disponible
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-lg">{getKpiIcon()}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Question */}
        {kpi.question && (
          <div>
            <Label className="text-sm font-medium">Question</Label>
            <p className="text-sm text-muted-foreground mt-1">
              {kpi.kpi_details.unit && (
                <span className="font-medium">{kpi.kpi_details.unit} </span>
              )}
              {kpi.question}
            </p>
          </div>
        )}

        {/* Current/Latest response */}
        {hasResponse && (
          <div>
            <Label className="text-sm font-medium">Réponse actuelle</Label>
            <Input
              value={kpi.answer}
              disabled
              className="mt-1 bg-muted"
            />
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>Dernière mise à jour: {formatDate(kpi.updated_at)}</span>
            </div>
          </div>
        )}

        {/* All previous responses */}
        {hasMultipleResponses && (
          <div>
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Historique des réponses</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAllResponses(!showAllResponses)}
                className="h-6 px-2 text-xs"
              >
                <History className="h-3 w-3 mr-1" />
                {showAllResponses ? "Masquer" : `Voir ${kpi.all_responses!.length - 1} réponses`}
              </Button>
            </div>
            
            {showAllResponses && (
              <div className="mt-2 space-y-2 max-h-40 overflow-y-auto">
                {kpi.all_responses!
                  .filter((_, index) => index !== 0) // Skip the first one (current response)
                  .map((response, index) => (
                    <div key={index} className="p-2 bg-muted/50 rounded-md">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{response.answer}</span>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(response.created_at)}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Add new response section */}
        {canAddResponse && (
          <div className="border-t pt-4">
            {!isAddingResponse ? (
              <Button
                onClick={() => setIsAddingResponse(true)}
                size="sm"
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Ajouter une nouvelle réponse
              </Button>
            ) : (
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">Nouvelle réponse</Label>
                  <Input
                    value={newResponse}
                    onChange={(e) => setNewResponse(e.target.value)}
                    placeholder="Saisissez votre réponse..."
                    className="mt-1"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={handleAddResponse}
                    size="sm"
                    disabled={isLoading}
                    className="flex-1"
                  >
                    {isLoading ? "Ajout..." : "Ajouter"}
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAddingResponse(false);
                      setNewResponse("");
                    }}
                    size="sm"
                    variant="outline"
                    disabled={isLoading}
                  >
                    Annuler
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Evolution button for numeric KPIs */}
        {isNumeric && hasMultipleResponses && (
          <div className="border-t pt-4">
            <Dialog open={isEvolutionDialogOpen} onOpenChange={setIsEvolutionDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Voir l'évolution
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Évolution - {getKpiTitle()}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={getEvolutionData()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="date" 
                          fontSize={12}
                          tick={{ fontSize: 12 }}
                        />
                        <YAxis 
                          fontSize={12}
                          tick={{ fontSize: 12 }}
                        />
                        <Tooltip 
                          formatter={(value: any, name: string) => [
                            value,
                            kpi.kpi_details.unit ? `${kpi.kpi_details.unit}` : 'Valeur'
                          ]}
                          labelFormatter={(label: string) => {
                            const dataPoint = getEvolutionData().find(d => d.date === label);
                            return dataPoint ? dataPoint.fullDate : label;
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#2563eb" 
                          strokeWidth={2}
                          dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Graphique montrant l'évolution de "{kpi.kpi_details.nom}" dans le temps.</p>
                    {kpi.kpi_details.unit && (
                      <p>Unité: {kpi.kpi_details.unit}</p>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}

        {/* Recurrence info */}
        {kpi.kpi_details.recurrence && (
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>
              {kpi.kpi_details.recurrence === "mensuel" 
                ? "Peut être mis à jour chaque mois" 
                : kpi.kpi_details.recurrence === "annuel"
                ? "Peut être mis à jour chaque année"
                : "Récurrence: " + kpi.kpi_details.recurrence}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 