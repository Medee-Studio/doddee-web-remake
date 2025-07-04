import {
  createEnjeuxFormData,
  fetchActionsWithObjectifsAndEnjeux,
  getEnjeuThreshold,
  getObjectifThreshold,
} from "@/app/dashboard/actions/functions";
import ActionsList from "@/components/dashboard/actions/actions-components/actions-list";
import { PageHeader } from "@/components/common/page-header";
import { redirectToPath } from "@/lib/auth/server";
import { getStatusRedirect } from "@/lib/helpers";
import { createClient } from "@/lib/supabase/server";

export default async function ActionsContent() {
  const supabase = await createClient();

  const result = await fetchActionsWithObjectifsAndEnjeux(supabase);
  
  if (result && result.data.length == 1 && result.data[0].actions.length == 0) {
    const redirectPath = getStatusRedirect(
      "/dashboard",
      "Pas d'actions disponibles ...",
      "Vous devez terminer votre inscription pour accéder à cette page",
    );
    return redirectToPath(redirectPath);
  }

  if (result && result.data) {
    const enjeuxFormData = createEnjeuxFormData(result.data[0]);
    const enjeuThreshold = getEnjeuThreshold(enjeuxFormData);
    const objectifThreshold = getObjectifThreshold(enjeuxFormData);

    return (
      <>
        <PageHeader title="Actions" />
        <ActionsList
          enjeuxFormData={enjeuxFormData}
          enjeuThreshold={enjeuThreshold}
          objectifThreshold={objectifThreshold}
        />
      </>
    );
  }
}