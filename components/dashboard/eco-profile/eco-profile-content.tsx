import { PageHeader } from "@/components/common/page-header";
import EcoProfileForm from "./eco-profile-form";
import { EcoProfile } from "@/types";
import { redirectToPath } from "@/lib/auth/server";
import { getStatusRedirect } from "@/lib/helpers";
import { getUserLabelsAndEcoProfile } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";

export default async function EcoProfileContent() {
  const supabase = await createClient();

  const user = await supabase.auth.getSession();
  const uuid = user.data.session?.user.id;

  if (!uuid) {
    const redirectPath = getStatusRedirect(
      "/auth/login",
      "Non authentifié",
      "Veuillez vous connecter pour accéder à cette page.",
    );
    return redirectToPath(redirectPath);
  }

  if (!user.data.session?.user.user_metadata.profile_completed) {
    const redirectPath = getStatusRedirect(
      "/dashboard",
      "Pas si vite !",
      "Veuillez finir tous les formulaires pour avoir accès à votre éco-profil.",
    );
    return redirectToPath(redirectPath);
  }

  try {
    const userLabelsAndEcoProfile = await getUserLabelsAndEcoProfile(supabase, uuid);
    
    if (!userLabelsAndEcoProfile) {
      const redirectPath = getStatusRedirect(
        "/dashboard",
        "Données indisponibles",
        "Impossible de récupérer vos données d'éco-profil. Veuillez réessayer plus tard.",
      );
      return redirectToPath(redirectPath);
    }

    const labels = userLabelsAndEcoProfile["labels"] || [];
    const profile: EcoProfile = {
      ...userLabelsAndEcoProfile["profile"],
      user_id_moral: uuid,
    };

    console.log(profile);
    console.log(labels);

    return (
      <>
        <PageHeader title="Éco-profil" />
        <EcoProfileForm
          profile={profile}
          uuid={uuid}
          labels={labels}
        />
      </>
    );
  } catch (error) {
    console.error('Error loading eco profile:', error);
    const redirectPath = getStatusRedirect(
      "/dashboard",
      "Erreur",
      "Une erreur s'est produite lors du chargement de votre éco-profil.",
    );
    return redirectToPath(redirectPath);
  }
}