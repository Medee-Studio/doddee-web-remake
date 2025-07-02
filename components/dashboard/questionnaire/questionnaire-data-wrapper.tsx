import { createClient } from "@/lib/supabase/server";
import { getUtilisateurMorauxSecteurAndCategory } from "@/lib/supabase/queries";
import QuestionnaireContent from "./questionnaire-content";

export default async function QuestionnaireDataWrapper() {
  const supabase = await createClient();
  const userData = await getUtilisateurMorauxSecteurAndCategory(supabase);

  return <QuestionnaireContent userData={userData} />;
} 