import { Suspense } from "react";
import QuestionnaireDataWrapper from "@/components/dashboard/questionnaire/questionnaire-data-wrapper";
import QuestionnaireSkeleton from "@/components/dashboard/questionnaire/questionnaire-skeleton";

export default function EnvironnementPage() {
  return (
    <Suspense fallback={<QuestionnaireSkeleton />}>
      <QuestionnaireDataWrapper />
    </Suspense>
  );
}