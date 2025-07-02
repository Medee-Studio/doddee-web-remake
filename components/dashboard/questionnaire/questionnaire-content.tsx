"use client";

import Questionnaire from "@/components/dashboard/questionnaire/questionnaire";
import { UtilisateurMorauxSecteurAndCategory } from "@/lib/supabase/queries";
import { buildEnvironmentQuestionnaire, getQuestionnaireInfo } from "@/lib/form-data/esg/environnement/questionnaire-builder";
import { buildGouvernanceQuestionnaire, getGouvernanceQuestionnaireInfo } from "@/lib/form-data/esg/gouvernance/questionnaire-builder";
import { QuestionnaireType } from "@/types";
import { QuestionTree } from "@/types/esg-form";

interface QuestionnaireContentProps {
  userData: UtilisateurMorauxSecteurAndCategory | null;
  questionnaireType: QuestionnaireType;
}

export default function QuestionnaireContent({ userData, questionnaireType }: QuestionnaireContentProps) {
  // Build dynamic questionnaire based on user data and questionnaire type
  const buildQuestionnaireByType = (type: QuestionnaireType, userData: UtilisateurMorauxSecteurAndCategory | null): QuestionTree => {
    switch (type) {
      case "environnement":
        return buildEnvironmentQuestionnaire(userData);
      case "gouvernance":
        return buildGouvernanceQuestionnaire(userData);
      case "social":
        // TODO: Implement social questionnaire builder
        console.warn("Social questionnaire builder not yet implemented");
        return [];
      default:
        console.warn(`Unknown questionnaire type: ${type}`);
        return [];
    }
  };

  // Get questionnaire info based on type
  const getQuestionnaireInfoByType = (type: QuestionnaireType, userData: UtilisateurMorauxSecteurAndCategory | null) => {
    switch (type) {
      case "environnement":
        return getQuestionnaireInfo(userData);
      case "gouvernance":
        return getGouvernanceQuestionnaireInfo(userData);
      case "social":
        // TODO: Implement social questionnaire info
        return {
          sections: ["Social questionnaire (not implemented)"],
          totalQuestions: 0,
          categoryStatus: {}
        };
      default:
        return {
          sections: [`Unknown questionnaire type: ${type}`],
          totalQuestions: 0,
          categoryStatus: {}
        };
    }
  };

  const dynamicQuestionnaire = buildQuestionnaireByType(questionnaireType, userData);
  const questionnaireInfo = getQuestionnaireInfoByType(questionnaireType, userData);

  // Get questionnaire title based on type
  const getQuestionnaireTitle = (type: QuestionnaireType): string => {
    switch (type) {
      case "environnement":
        return "Questionnaire Environnement";
      case "social":
        return "Questionnaire Social";
      case "gouvernance":
        return "Questionnaire Gouvernance";
      default:
        return "Questionnaire";
    }
  };

  const getQuestionnaireDescription = (type: QuestionnaireType): string => {
    switch (type) {
      case "environnement":
        return "Évaluez les pratiques environnementales de votre entreprise";
      case "social":
        return "Évaluez les pratiques sociales de votre entreprise";
      case "gouvernance":
        return "Évaluez les pratiques de gouvernance de votre entreprise";
      default:
        return "Évaluez les pratiques de votre entreprise";
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{getQuestionnaireTitle(questionnaireType)}</h1>
        <p className="text-muted-foreground mt-2">
          {getQuestionnaireDescription(questionnaireType)}
        </p>
        {userData && (
          <div className="mt-4 p-4 bg-muted/50 rounded-md">
            <h2 className="text-sm font-medium mb-2">Informations utilisateur (Debug):</h2>
            <p className="text-xs">Sous-secteur ID: {userData.sous_secteur_id || "Non défini"}</p>
            
            <div className="mt-3">
              <h3 className="text-xs font-medium mb-1">Questionnaires inclus:</h3>
              <div className="space-y-1">
                {questionnaireInfo.sections.map((section, index) => (
                  <p key={index} className="text-xs text-muted-foreground">• {section}</p>
                ))}
              </div>
              <p className="text-xs mt-2 font-medium">Total: {questionnaireInfo.totalQuestions} questions</p>
            </div>

            <div className="mt-3">
              <h3 className="text-xs font-medium mb-1">Statut des catégories:</h3>
              <div className="grid grid-cols-2 gap-1 text-xs">
                {Object.entries(questionnaireInfo.categoryStatus).map(([key, value]) => (
                  <p key={key} className="text-muted-foreground">
                    {key}: <span className={value === true ? "text-green-600" : value === false ? "text-red-600" : "text-gray-500"}>
                      {value === null ? "null" : value.toString()}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Questionnaire 
        questionTree={dynamicQuestionnaire}
        questionnaireType={questionnaireType}
      />
    </div>
  );
} 