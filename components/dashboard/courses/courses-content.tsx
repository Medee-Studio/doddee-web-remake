import { PageHeader } from "@/components/common/page-header";
import CoursesCards from "@/components/dashboard/courses/courses-cards";
import { redirectToPath } from "@/lib/auth/server";
import { getStatusRedirect } from "@/lib/helpers";
import { createClient } from "@/lib/supabase/server";
import { getUserRessources } from "@/lib/supabase/queries";

export default async function CoursesContent() {
  const supabase = await createClient();
  const ressources = await getUserRessources(supabase);

  if (!ressources.ressources_externes && !ressources.ressources_internes) {
    const redirectPath = getStatusRedirect(
      "/dashboard",
      "Pas de cours disponibles ...",
      "Il n'y a pas encore de cours disponibles.",
    );
    return redirectToPath(redirectPath);
  }

  return (
    <>
      <PageHeader title="Mes cours" />
      <div className="p-6">
        <CoursesCards ressources={ressources} />
      </div>
    </>
  );
}