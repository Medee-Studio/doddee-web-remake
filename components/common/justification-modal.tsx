"use client";

import { useState, useEffect } from "react";
import { FileText, Upload, X, CheckCircle, Clock } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { PlanAction, PJ, UserMoralPJ } from "@/types";
import { getActionPJs, getUserMoralPJs, uploadPJFile, getPJFileUrl } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

interface JustificationModalProps {
  action: PlanAction;
}

interface PJUploadModalProps {
  pj: PJ;
  userPJ: UserMoralPJ | null;
  idUtilisateurMoralAction: number;
  onUploadSuccess: () => void;
}

function PJUploadModal({ pj, userPJ, idUtilisateurMoralAction, onUploadSuccess }: PJUploadModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadFileUrl = async () => {
      if (userPJ?.path_to_pj) {
        const supabase = createClient();
        const url = await getPJFileUrl(supabase, userPJ.path_to_pj);
        setFileUrl(url);
      }
    };
    loadFileUrl();
  }, [userPJ?.path_to_pj]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Type de fichier non autorisé. Seuls les PDF et images (JPG, PNG) sont acceptés.");
        return;
      }
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        toast.error("Le fichier est trop volumineux. Taille maximale: 10MB.");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      const supabase = createClient();
      const result = await uploadPJFile(supabase, selectedFile, idUtilisateurMoralAction, pj.id_pj);
      
      if (result.success) {
        toast.success("Fichier téléchargé avec succès!");
        setIsOpen(false);
        setSelectedFile(null);
        onUploadSuccess();
      } else {
        toast.error(result.error || "Erreur lors du téléchargement");
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error("Erreur lors du téléchargement");
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const getStatusIcon = () => {
    if (userPJ?.status === 'uploaded') {
      return (
        <div className="flex flex-row space-x-1 items-center">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <Label className="text-green-700">Téléchargé</Label>
        </div>
      );
    }
    return (
      <div className="flex flex-row space-x-1 items-center">
        <Clock className="h-4 w-4 text-yellow-500" />
        <Label className="text-yellow-700">En attente</Label>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors cursor-pointer bg-white">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">{pj.titre}</h4>
            {getStatusIcon()}
          </div>
          <p className="text-sm text-gray-600 mb-4">{pj.description}</p>
          <Button variant="outline" size="sm" className="w-full">
            {userPJ?.status === 'uploaded' ? 'Modifier le fichier' : 'Envoyer le fichier'}
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-xl">Télécharger: {pj.titre}</DialogTitle>
          <DialogDescription className="text-base pt-2">
            {pj.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {userPJ?.path_to_pj && fileUrl && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-medium text-green-800 mb-3">Fichier actuel:</p>
              <a 
                href={fileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                📄 Voir le fichier téléchargé
              </a>
            </div>
          )}

          {!selectedFile ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <input
                type="file"
                id={`file-upload-${pj.id_pj}`}
                className="hidden"
                onChange={handleFileSelect}
                accept=".pdf,.jpg,.jpeg,.png"
              />
              <label
                htmlFor={`file-upload-${pj.id_pj}`}
                className="cursor-pointer flex flex-col items-center space-y-3"
              >
                <Upload className="h-10 w-10 text-gray-400" />
                <span className="text-base text-gray-600 font-medium">
                  {userPJ?.path_to_pj ? "Remplacer le fichier" : "Cliquez pour sélectionner un fichier"}
                </span>
                <span className="text-sm text-gray-400">
                  PDF, JPG, PNG (max 10MB)
                </span>
              </label>
            </div>
          ) : (
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-900 truncate">
                  {selectedFile.name}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={removeFile}
                className="h-8 w-8 p-0 hover:bg-red-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="flex space-x-3 pt-4">
            <Button
              onClick={handleUpload}
              disabled={!selectedFile || isUploading}
              className="flex-1 py-2.5"
            >
              {isUploading ? "Téléchargement..." : "Envoyer"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2.5"
            >
              Annuler
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function JustificationModal({ action }: JustificationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [pjs, setPjs] = useState<PJ[]>([]);
  const [userPJs, setUserPJs] = useState<UserMoralPJ[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPJsData = async () => {
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
  };

  useEffect(() => {
    if (isOpen) {
      fetchPJsData();
    }
  }, [isOpen, action.action_data.id, action.user_action_data.id_utilisateur_moral_action]);

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
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Documents requis
                </h3>
                <Badge variant="secondary" className="text-sm">
                  {pjs.length} document{pjs.length > 1 ? 's' : ''}
                </Badge>
              </div>
              <div className="grid gap-4">
                {pjs.map((pj) => (
                  <PJUploadModal
                    key={pj.id_pj}
                    pj={pj}
                    userPJ={getUserPJForPJ(pj.id_pj)}
                    idUtilisateurMoralAction={action.user_action_data.id_utilisateur_moral_action}
                    onUploadSuccess={handleUploadSuccess}
                  />
                ))}
              </div>
            </div>
          )}

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