import { PageHeader } from "@/components/common/page-header";
import Plan from "@/components/dashboard/action-plan/action-plan-components/plan";
import { getUserActionsData } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { redirectToPath } from "@/utils/auth-helpers/server";
import { getStatusRedirect } from "@/utils/helpers";

export const dynamic = "force-dynamic";

export default async function ActionPlanContent() {
  const supabase = await createClient();
  
  let actions;
  try {
    actions = await getUserActionsData(supabase);
  } catch (error) {
    console.error('Error loading actions:', error);
    const redirectPath = getStatusRedirect(
      "/dashboard",
      "Erreur lors du chargement des actions",
      "Une erreur s'est produite lors du chargement de vos actions",
    );
    return redirectToPath(redirectPath);
  }

  if (!actions || actions.length === 0) {
    const redirectPath = getStatusRedirect(
      "/dashboard",
      "Pas d'actions disponibles ...",
      "Vous devez terminer votre inscription pour accéder à cette page",
    );
    return redirectToPath(redirectPath);
  }

  // Sort actions by deadline (ascending)
  actions.sort((a, b) => {
    const deadlineA = new Date(a.user_action_data.deadline).getTime();
    const deadlineB = new Date(b.user_action_data.deadline).getTime();
    return deadlineA - deadlineB;
  });

  return (
    <>
      <PageHeader title="Plan d'action" />
      <div className="flex flex-col space-y-6 p-6">
        <Plan actions={actions} />
      </div>
    </>
  );
}