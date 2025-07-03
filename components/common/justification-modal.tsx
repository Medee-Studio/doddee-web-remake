"use client";

import { useState, useEffect, useCallback } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PlanAction, PJ, UserMoralPJ } from "@/types";
import { getActionPJs, getUserMoralPJs } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { PJUploadModal } from "./pj-upload-modal";

interface JustificationModalProps {
  action: PlanAction;
}

export function JustificationModal({ action }: JustificationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [pjs, setPjs] = useState<PJ[]>([]);
  const [userPJs, setUserPJs] = useState<UserMoralPJ[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPJsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const supabase = createClient();
      
      // Fetch required PJs for this action
      const actionPJs = await getActionPJs(supabase, action.action_data.id);
      setPjs(actionPJs);

      // Fetch user's current PJ uploads for this action
      const userMoralPJs = await getUserMoralPJs(supabase, action.user_action_data.id_utilisateur_moral_action);
      setUserPJs(userMoralPJs);
      
    } catch (error) {
      console.error('Error fetching PJs data:', error);
      toast.error("Erreur lors du chargement des pièces justificatives");
    } finally {
      setIsLoading(false);
    }
  }, [action.action_data.id, action.user_action_data.id_utilisateur_moral_action]);

  useEffect(() => {
    if (isOpen) {
      fetchPJsData();
    }
  }, [isOpen, fetchPJsData]);

  const handleUploadSuccess = () => {
    // Refresh the PJs data after successful upload
    fetchPJsData();
  };

  const getUserPJForPJ = (pjId: number): UserMoralPJ | null => {
    return userPJs.find(userPJ => userPJ.id_pj === pjId) || null;
  };

  const PJSkeleton = () => (
    <div className="p-4 border border-gray-200 rounded-lg bg-white">
      <div className="flex items-center justify-between mb-3">
        <Skeleton className="h-5 w-32" />
        <div className="flex items-center space-x-1">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <Skeleton className="h-8 w-full" />
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">
          <FileText className="h-4 w-4 mr-1" />
          Justifier
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-xl">Pièces justificatives</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Téléchargez les documents requis pour valider l&apos;action &quot;{action.action_data.nom_action}&quot;
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {isLoading ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="grid gap-4">
                <PJSkeleton />
                <PJSkeleton />
                <PJSkeleton />
              </div>
            </div>
          ) : pjs.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-base text-gray-600">Aucune pièce justificative requise pour cette action.</p>
            </div>
          ) : (() => {
            const remainingDocs = pjs.filter(pj => {
              const userPJ = getUserPJForPJ(pj.id_pj);
              return !userPJ || !userPJ.path_to_pj;
            });
            
            // If all documents have been uploaded, show completion message
            if (remainingDocs.length === 0) {
              return (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <p className="text-base text-gray-600">Tous les documents requis ont été téléchargés.</p>
                </div>
              );
            }
            
            return (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Documents requis
                  </h3>
                  <Badge variant="secondary" className="text-sm">
                    {remainingDocs.length} document{remainingDocs.length > 1 ? 's' : ''}
                  </Badge>
                </div>
                <div className="grid gap-4">
                  {pjs.map((pj) => {
                    const userPJ = getUserPJForPJ(pj.id_pj);
                    
                    // Don't show the upload modal if the PJ already has a path (file uploaded)
                    if (userPJ && userPJ.path_to_pj) {
                      return null;
                    }
                    
                    return (
                      <PJUploadModal
                        key={pj.id_pj}
                        pj={pj}
                        userPJ={userPJ}
                        idUtilisateurMoralAction={action.user_action_data.id_utilisateur_moral_action}
                        onUploadSuccess={handleUploadSuccess}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })()}

          <div className="flex justify-end pt-6 border-t">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="px-6"
            >
              Fermer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 