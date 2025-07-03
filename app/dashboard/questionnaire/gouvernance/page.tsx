import { Suspense } from "react";
import QuestionnaireDataWrapper from "@/components/dashboard/questionnaire/questionnaire-data-wrapper";
import QuestionnaireSkeleton from "@/components/dashboard/questionnaire/questionnaire-skeleton";

export default function GouvernancePage() {
  return (
    <Suspense fallback={<QuestionnaireSkeleton />}>
      <QuestionnaireDataWrapper questionnaireType="gouvernance" />
    </Suspense>
  );
}
