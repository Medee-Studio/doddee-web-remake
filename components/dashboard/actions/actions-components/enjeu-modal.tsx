"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ActionFormDataType,
  EnjeuFormDataType,
  ObjectifFormDataType,
} from "@/types";
import { whichClasseEmoji } from "@/lib/helpers";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import ObjectifModal from "./objectif-modal";

type EnjeuModalProps = {
  enjeu: EnjeuFormDataType;
  objectifThreshold: number | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  actionsEnCours: ActionFormDataType[];
  onSelect: (
    action: ActionFormDataType,
    date: Date | undefined,
  ) => Promise<void>;
  objectifOpen: boolean;
};

export default function EnjeuModal({
  enjeu,
  objectifThreshold,
  open,
  onOpenChange,
  actionsEnCours,
  onSelect,
  objectifOpen,
}: EnjeuModalProps) {
  const [selectedObjectif, setSelectedObjectif] =
    useState<ObjectifFormDataType | null>(null);
  const [objectifModalOpen, setObjectifModalOpen] = useState(objectifOpen);

  const handleObjectifClick = (objectif: ObjectifFormDataType) => {
    setSelectedObjectif(objectif);
    setObjectifModalOpen(true);
  };

  // Fonction modifiée pour gérer la sélection d'action
  const handleActionSelect = async (
    action: ActionFormDataType,
    date: Date | undefined,
  ) => {
    await onSelect(action, date);
    // Fermer explicitement les deux modals
    setObjectifModalOpen(false);
    onOpenChange(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="md:w-4/5 lg:max-w-3xl w-full">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {whichClasseEmoji(enjeu.classe.nom_classe_enjeu)}{" "}
              {enjeu.nom_enjeu}
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                {enjeu.classe.nom_classe_enjeu}
              </span>
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2 mt-4 overflow-y-auto">
            {enjeu.objectifs.map((objectif) => (
              <Card
                key={objectif.nom_objectif}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleObjectifClick(objectif)}
              >
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {objectif.nom_objectif}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {objectif.classe.nom_classe_objectif}
                      </p>
                    </div>

                    {objectifThreshold &&
                      objectif.total_coef >= objectifThreshold && (
                        <Badge className="border-orange-300 bg-orange-100 text-black hover:bg-orange-100">
                          Priorité
                        </Badge>
                      )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {selectedObjectif && (
        <ObjectifModal
          objectif={selectedObjectif}
          open={objectifModalOpen}
          onOpenChange={setObjectifModalOpen}
          actionsEnCours={actionsEnCours}
          onSelect={handleActionSelect} // Utiliser notre fonction wrapper
        />
      )}
    </>
  );
}