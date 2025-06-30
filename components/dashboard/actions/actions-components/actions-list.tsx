"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ActionFormDataType, EnjeuFormDataType } from "@/types";
import { whichClasseEmoji } from "@/utils/helpers";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import ActionCard from "./action-card";
import { Badge } from "@/components/ui/badge";
import EnjeuModal from "./enjeu-modal";

type ActionsListProps = {
  enjeuxFormData: EnjeuFormDataType[];
  enjeuThreshold: number | null;
  objectifThreshold: number | null;
};

export default function ActionsList({
  enjeuxFormData,
  enjeuThreshold,
  objectifThreshold,
}: ActionsListProps) {
  const [actionsEnCours, setActionsEnCours] = useState<ActionFormDataType[]>(
    [],
  );
  const supabase = createClient();
  const [, setLoading] = useState(false);
  const [selectedEnjeu, setSelectedEnjeu] = useState<EnjeuFormDataType | null>(
    null,
  );
  const [enjeuModalOpen, setEnjeuModalOpen] = useState(false);
  const [objectifModalOpen, setObjectifModalOpen] = useState(false);

  const router = useRouter();

  const loadActionsEnCours = useCallback(async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase
        .from("utilisateurs_moraux_actions")
        .select(
          `
          *,
          actions (*)
        `,
        )
        .eq("user_id_moral", session.user.id)
        .eq("action_status", "en_cours");

      if (error) throw error;

      setActionsEnCours(data.map((item) => item.actions));
    } catch (error) {
      console.error("Erreur lors du chargement des actions:", error);
    }
  }, [supabase]);

  useEffect(() => {
    loadActionsEnCours();
  }, [loadActionsEnCours]);

  const handleDeleteAction = async (actionToDelete: ActionFormDataType) => {
    setLoading(true);
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) return;

      const { error } = await supabase
        .from("utilisateurs_moraux_actions")
        .update({ action_status: "disponible", deadline: null })
        .match({
          user_id_moral: session.user.id,
          id_action: actionToDelete.id_action,
        });

      if (error) throw error;

      await loadActionsEnCours();
      router.refresh();
      toast.success(`Action supprimée ! 🗑️`, {
        description: `${actionToDelete.nom_action} a été retirée de vos actions en cours.`,
      });
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toast.error("Erreur ! ❌", {
        description: "Impossible de supprimer l'action. Veuillez réessayer.",
      });
    }
    setLoading(false);
  };

  const handleSelectAction = async (
    action: ActionFormDataType,
    date: Date | undefined,
  ) => {
    setLoading(true);
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) return;

      const { error } = await supabase
        .from("utilisateurs_moraux_actions")
        .update({ action_status: "en_cours", deadline: date })
        .match({
          user_id_moral: session.user.id,
          id_action: action.id_action,
        });

      if (error) throw error;

      await loadActionsEnCours();
      router.refresh();
      toast.success("Action ajoutée ! ✅", {
        description: `${action.nom_action} a été ajoutée à vos actions en cours.`,
      });
    } catch (error) {
      console.error("Erreur lors de la sélection:", error);
      toast.error("Erreur ! ❌", {
        description: "Impossible d'ajouter l'action. Veuillez réessayer.",
      });
    }
    // Fermer le modal après avoir sélectionné une action
    setObjectifModalOpen(false);
    setEnjeuModalOpen(false);
    setLoading(false);
  };

  const handleEnjeuClick = (enjeu: EnjeuFormDataType) => {
    setSelectedEnjeu(enjeu);
    setEnjeuModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="">
        <Card className="h-full overflow-x-scroll scrollbar-hidden">
          <CardContent>
            <h2 className="font-semibold text-xl mb-4">
              Actions en cours ({actionsEnCours.length})
            </h2>

            <div className="border border-dashed rounded-md p-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto">
                {actionsEnCours.length > 0 ? (
                  actionsEnCours.map((action, key) => (
                    <div key={key} className="w-full">
                      <ActionCard
                        action={action}
                        buttonType="delete"
                        onSelect={async () => await handleDeleteAction(action)}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-sm font-semibold text-muted-foreground">
                    Aucune action en cours
                  </p>
                )}
              </div>
            </div>

            <h2 className="font-semibold text-xl mb-4">
              Actions disponibles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {enjeuxFormData.map((enjeu) => (
                <Card
                  key={enjeu.nom_enjeu}
                  className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleEnjeuClick(enjeu)}
                >
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">
                          {whichClasseEmoji(enjeu.classe.nom_classe_enjeu)}{" "}
                          {enjeu.nom_enjeu}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {enjeu.classe.nom_classe_enjeu}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {enjeuThreshold &&
                          enjeu.total_coef >= enjeuThreshold && (
                            <Badge className="border-orange-300 bg-orange-100 text-black hover:bg-orange-100">
                              Priorité
                            </Badge>
                          )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Le modal doit être rendu ici, à l'extérieur des cards et avec une condition appropriée */}
      {selectedEnjeu && (
        <EnjeuModal
          enjeu={selectedEnjeu}
          open={enjeuModalOpen}
          objectifThreshold={objectifThreshold}
          onOpenChange={setEnjeuModalOpen}
          actionsEnCours={actionsEnCours}
          onSelect={handleSelectAction}
          objectifOpen={objectifModalOpen}
        />
      )}
    </div>
  );
}