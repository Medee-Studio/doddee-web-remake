"use client";

import Questionnaire from "@/components/dashboard/questionnaire/questionnaire";
import { UtilisateurMorauxSecteurAndCategory } from "@/types";
import { buildEnvironmentQuestionnaire } from "@/lib/form-data/esg/environnement/questionnaire-builder";
import { buildGouvernanceQuestionnaire } from "@/lib/form-data/esg/gouvernance/questionnaire-builder";
import { buildSocialQuestionnaire} from "@/lib/form-data/esg/social/questionnaire-builder";
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
        return buildSocialQuestionnaire(userData);
      default:
        console.warn(`Unknown questionnaire type: ${type}`);
        return [];
    }
  };


  const dynamicQuestionnaire = buildQuestionnaireByType(questionnaireType, userData);


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
      </div>

      <Questionnaire 
        questionTree={dynamicQuestionnaire}
        questionnaireType={questionnaireType}
      />
    </div>
  );
} 