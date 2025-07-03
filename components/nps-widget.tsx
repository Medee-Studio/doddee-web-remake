"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle } from "lucide-react";

interface NPSWidgetProps {
  ecoProfileId: string;
}

export default function NPSWidget({ ecoProfileId }: NPSWidgetProps) {
  const [score, setScore] = useState([5]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/nps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ecoProfileId,
          score: score[0],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi');
      }

      setHasSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setIsSubmitting(false);
    }
  };


  if (hasSubmitted) {
    return (
      <Card className="w-full bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Merci pour votre évaluation !
          </h3>
          <p className="text-green-700">
            Votre retour nous aide à améliorer nos services.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">
          💭 Votre avis compte
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Label className="text-base font-medium">
            Sur une échelle de 0 à 10, quelle est la probabilité pour que vous nous recommandiez ?
          </Label>
        </div>

        <div className="space-y-4">
          <div className="px-2">
            <Slider
              value={score}
              onValueChange={setScore}
              max={10}
              min={0}
              step={1}
              className="w-full"
            />
          </div>

          <div className="flex justify-between text-sm text-muted-foreground px-2">
            <span>Pas du tout probable (0)</span>
            <span>Extrêmement probable (10)</span>
          </div>

          <div className="text-center">


            <div className="text-2xl font-bold mb-2">{score[0]}</div>            

          </div>
        </div>

        {error && (
          <div className="flex items-center justify-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <div className="text-center">
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer mon évaluation"}
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}