"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ActionFormDataType, ObjectifFormDataType } from "@/types";
import ActionCard from "./action-card";

type ObjectifModalProps = {
  objectif: ObjectifFormDataType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  actionsEnCours: ActionFormDataType[];
  onSelect: (
    action: ActionFormDataType,
    date: Date | undefined,
  ) => Promise<void>;
};

export default function ObjectifModal({
  objectif,
  open,
  onOpenChange,
  actionsEnCours,
  onSelect,
}: ObjectifModalProps) {
  const availableActions = objectif.actions.filter(
    (action) =>
      !actionsEnCours.some((enCours) => enCours.id_action === action.id_action),
  );

  // Wrapper functions to handle serializable props issue in "use client" components
  const handleOpenChange = (newOpen: boolean) => {
    onOpenChange(newOpen);
  };

  // Wrapper function for onSelect to ensure modal closes
  const handleSelectAction = async (
    action: ActionFormDataType,
    date: Date | undefined,
  ) => {
    try {
      // Appel de la fonction onSelect
      await onSelect(action, date);
      // Fermer explicitement le modal
      onOpenChange(false);
    } catch (error) {
      console.error("Erreur lors de la sélection de l'action:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="md:w-4/5 lg:max-w-3xl">
        <DialogHeader className="h-fit sticky top-0 z-10">
          <DialogTitle className="text-xl font-bold">
            {objectif.nom_objectif}
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              {objectif.classe.nom_classe_objectif}
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="flex-col flex-grow overflow-y-auto">          
          <div className="grid overflow-y-auto h-full grid-cols-1 md:grid-cols-2 gap-3 py-2">
            {availableActions.length > 0 ? (
              availableActions.map((action, index) => (
                <ActionCard
                  key={index}
                  action={action}
                  buttonType="select"
                  onSelect={handleSelectAction} // Utiliser notre wrapper function
                />
              ))
            ) : (
              <p className="text-sm text-muted-foreground p-4 text-center">
                Aucune action disponible pour cet objectif
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}