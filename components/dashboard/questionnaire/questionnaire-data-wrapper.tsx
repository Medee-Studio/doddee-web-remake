import { createClient } from "@/lib/supabase/server";
import { getUtilisateurMorauxSecteurAndCategory } from "@/lib/supabase/queries";
import { QuestionnaireType } from "@/types";
import QuestionnaireContent from "./questionnaire-content";

interface QuestionnaireDataWrapperProps {
  questionnaireType: QuestionnaireType;
}

export default async function QuestionnaireDataWrapper({ questionnaireType }: QuestionnaireDataWrapperProps) {
  const supabase = await createClient();
  const userData = await getUtilisateurMorauxSecteurAndCategory(supabase);

  return <QuestionnaireContent userData={userData} questionnaireType={questionnaireType} />;
} 