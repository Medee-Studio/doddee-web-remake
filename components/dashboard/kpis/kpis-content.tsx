import { PageHeader } from "@/components/common/page-header";
import KpisForm from "./kpis-form";
import { redirectToPath } from "@/lib/auth/server";
import { getStatusRedirect } from "@/lib/helpers";
import { getUser } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { Kpi } from "@/types";

export default async function KpisContent() {
  const supabase = await createClient();
  const user = await getUser(supabase);
  
  let utilisateurs_moraux_kpis: Kpi[] | null = null;
  
  if (user) {
    const { data, error } = await supabase
      .from("utilisateurs_moraux_kpis")
      .select("kpi_type,kpi_value,kpi_label")
      .eq("user_id_moral", user.id);
    
    utilisateurs_moraux_kpis = data;
    
    if (error) {
      const redirectPath = getStatusRedirect(
        "/dashboard",
        "Erreur",
        "Vos KPIs précédemment remplis n'ont pas pu être récupérés.",
      );
      return redirectToPath(redirectPath);
    }
  }

  return (
    <>
      <PageHeader title="Indicateurs de performance (KPIs)" />
      <KpisForm kpis={utilisateurs_moraux_kpis} />
    </>
  );
}