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
import { Label } from "@/components/ui/label";
import { PJ, UserMoralPJ } from "@/types";
import { uploadPJFile, getPJFileUrl } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

interface PJUploadModalProps {
  pj: PJ;
  userPJ: UserMoralPJ | null;
  idUtilisateurMoralAction: number;
  onUploadSuccess: () => void;
}

export function PJUploadModal({ pj, userPJ, idUtilisateurMoralAction, onUploadSuccess }: PJUploadModalProps) {
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
    if (userPJ?.status === 'valide') {
      return (
        <div className="flex flex-row space-x-1 items-center">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <Label className="text-green-700">Validé</Label>
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
    <Dialog open={isOpen} onOpenChange={userPJ?.path_to_pj ? () => {} : setIsOpen}>
      <DialogTrigger asChild>
        <div 
          className={`p-4 border border-gray-200 rounded-lg transition-colors bg-white ${
            userPJ?.path_to_pj 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:border-gray-300 cursor-pointer'
          }`}
          onClick={userPJ?.path_to_pj ? (e) => e.preventDefault() : undefined}
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">{pj.titre}</h4>
            {getStatusIcon()}
          </div>
          <p className="text-sm text-gray-600 mb-4">{pj.description}</p>
          {userPJ?.path_to_pj ? (
            <Label className="w-full text-center text-sm font-medium text-green-700">Fichier envoyé</Label>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
            >
              Envoyer le fichier
            </Button>
          )}
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
            {!userPJ?.path_to_pj && (
              <Button
                onClick={handleUpload}
                disabled={!selectedFile || isUploading}
                className="flex-1 py-2.5"
              >
                {isUploading ? "Téléchargement..." : "Envoyer"}
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className={!userPJ?.path_to_pj ? "flex-1 py-2.5" : "w-full py-2.5"}
            >
              Annuler
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 