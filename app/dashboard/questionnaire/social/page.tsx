import { Suspense } from "react";
import QuestionnaireSkeleton from "@/components/dashboard/questionnaire/questionnaire-skeleton";
import QuestionnaireDataWrapper from "@/components/dashboard/questionnaire/questionnaire-data-wrapper";

export default function SocialPage() {
  return (
    <Suspense fallback={<QuestionnaireSkeleton />}>
      <QuestionnaireDataWrapper questionnaireType="social" />
    </Suspense>
  );
}
