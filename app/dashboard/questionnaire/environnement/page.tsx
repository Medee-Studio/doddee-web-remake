"use client";

import Questionnaire from "@/components/dashboard/questionnaire/questionnaire";
import { ea } from "@/lib/form-data/esg/environnement/ea";
import { etpe } from "@/lib/form-data/esg/environnement/etpe";
import { ed } from "@/lib/form-data/esg/environnement/ed";

export default function EnvironnementPage() {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Questionnaire Environnement</h1>
        <p className="text-muted-foreground mt-2">
          Évaluez les pratiques environnementales de votre entreprise
        </p>
      </div>

      <Questionnaire 
        questionTree={etpe} 
      />
    </div>
  );
}