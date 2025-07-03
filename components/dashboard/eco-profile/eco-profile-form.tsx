"use client";

import { EcoProfile } from "@/types";
import { deepEqual, getURL } from "@/lib/helpers";
import { upsertEcoProfile } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/client";
import { Download, Eye, Facebook, Instagram, Linkedin, Loader2, QrCode } from "lucide-react";
import { useState } from "react";
import QRCode from "qrcode";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Image from "next/image";

interface EcoProfileFormProps {
  profile: EcoProfile;
  uuid: string;
  labels: string[];
}

export default function EcoProfileForm({
  profile,
  uuid,
  labels,
}: EcoProfileFormProps) {
  const [modifiedProfile, setModifiedProfile] = useState<EcoProfile>(profile);
  const [loading, setLoading] = useState<boolean>(false);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [qrCodeDialogOpen, setQrCodeDialogOpen] = useState<boolean>(false);

  const changeKey = (
    key: keyof EcoProfile,
    value: number | string | boolean,
  ) => {
    setModifiedProfile((prevProfile) => ({
      ...prevProfile,
      [key]: value,
    }));
  };

  const upsertData = async () => {
    setLoading(true);
    const supabase = createClient();
    
    const result = await upsertEcoProfile(supabase, modifiedProfile);

    setLoading(false);

    if ('error' in result) {
      toast.error(result.error);
      return;
    }

    toast.success(result.success || "Vos modifications ont bien été prises en compte");
    
    // Refresh the page to show updated data
    window.location.reload();
  };

  const generateQrCode = async () => {
    try {
      const url = `${getURL()}/ecoprofile/${uuid}`;
      const qrCodeData = await QRCode.toDataURL(url, {
        errorCorrectionLevel: 'H',
        margin: 1,
        width: 256,
      });
      setQrCode(qrCodeData);
      setQrCodeDialogOpen(true);
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast.error("Erreur lors de la génération du QR code");
    }
  };

  const downloadQrCode = () => {
    if (!qrCode) return;
    
    const link = document.createElement('a');
    link.download = 'eco-profil-qr-code.png';
    link.href = qrCode;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("QR Code téléchargé avec succès !");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">
            Mon éco profil
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {labels &&
              labels.map((label, i) => (
                <Badge key={i} variant="secondary">
                  {label}
                </Badge>
              ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="public-profile" className="font-medium">
              Rendre public mon éco profil
            </Label>
            <Switch
              id="public-profile"
              checked={modifiedProfile.url_unique || false}
              onCheckedChange={(e) => changeKey("url_unique", e)}
            />
          </div>

          <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-6 w-full">
            {profile.url_unique && (
              <>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open(`${getURL()}/ecoprofile/${uuid}`)}
                >
                  <Eye className="mr-2 h-4 w-4" /> Voir mon site
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={generateQrCode}
                  disabled={loading}
                >
                  <QrCode className="mr-2 h-4 w-4" /> QR Code
                </Button>
              </>
            )}

          </div>
            {!deepEqual(modifiedProfile, profile) && (
              <Button
                onClick={async () => await upsertData()}
                disabled={loading}
                className="w-full"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sauvegarder les modifications
              </Button>
            )}
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>🌱 Raison d&apos;être</CardTitle>
            <CardDescription>
              Exprimez le pourquoi profond de votre entreprise, sa contribution
              unique à la société, au-delà du profit. Quel impact positif
              souhaitez-vous avoir sur le monde ?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={modifiedProfile.raison_etre || ""}
              onChange={(e) => changeKey("raison_etre", e.target.value)}
              placeholder="Entrez votre raison d&apos;être"
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>⭐ Valeurs</CardTitle>
            <CardDescription>
              Décrivez les principes fondamentaux qui guident vos actions et vos
              décisions au quotidien. Quelles sont les valeurs qui définissent
              votre culture d&apos;entreprise ?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={modifiedProfile.valeurs || ""}
              onChange={(e) => changeKey("valeurs", e.target.value)}
              placeholder="Entrez vos valeurs"
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🏢 Présentation de l&apos;entreprise</CardTitle>
            <CardDescription>
              Présentez votre activité principale, votre histoire et ce qui vous
              rend unique. Donnez vie à votre entreprise en quelques phrases
              percutantes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={modifiedProfile.presentation_entreprise || ""}
              onChange={(e) =>
                changeKey("presentation_entreprise", e.target.value)
              }
              placeholder="Entrez votre présentation de l&apos;entreprise"
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🔭 Vision</CardTitle>
            <CardDescription>
              Partagez votre ambition à long terme. Où voyez-vous votre
              entreprise dans le futur et quel changement voulez-vous apporter
              dans votre secteur ?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={modifiedProfile.vision || ""}
              onChange={(e) => changeKey("vision", e.target.value)}
              placeholder="Entrez votre vision"
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>⚡ Missions</CardTitle>
            <CardDescription>
              Listez vos objectifs concrets et les actions que vous menez pour
              réaliser votre vision. Comment traduisez-vous vos ambitions en
              réalisations concrètes ?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={modifiedProfile.missions || ""}
              onChange={(e) => changeKey("missions", e.target.value)}
              placeholder="Entrez vos missions"
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>💫 Mot de l&apos;équipe</CardTitle>
            <CardDescription>
              Donnez la parole à vos collaborateurs ! Partagez un message
              authentique qui reflète l&apos;esprit d&apos;équipe et l&apos;engagement
              collectif de vos employés.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={modifiedProfile.mot_equipe || ""}
              onChange={(e) => changeKey("mot_equipe", e.target.value)}
              placeholder="Entrez votre mot de l&apos;équipe"
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🌐 Réseaux sociaux</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="linkedin">
              <Linkedin className="inline-block mr-2 h-4 w-4" /> LinkedIn
            </Label>
            <Input
              id="linkedin"
              value={modifiedProfile.url_linkedin || ""}
              onChange={(e) => changeKey("url_linkedin", e.target.value)}
              placeholder="Entrez l&apos;url vers votre compte LinkedIn"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="instagram">
              <Instagram className="inline-block mr-2 h-4 w-4" /> Instagram
            </Label>
            <Input
              id="instagram"
              value={modifiedProfile.url_insta || ""}
              onChange={(e) => changeKey("url_insta", e.target.value)}
              placeholder="Entrez l&apos;url vers votre compte Instagram"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="facebook">
              <Facebook className="inline-block mr-2 h-4 w-4" /> Facebook
            </Label>
            <Input
              id="facebook"
              value={modifiedProfile.url_facebook || ""}
              onChange={(e) => changeKey("url_facebook", e.target.value)}
              placeholder="Entrez l&apos;url vers votre compte Facebook"
            />
          </div>
        </CardContent>
      </Card>

      <Dialog open={qrCodeDialogOpen} onOpenChange={setQrCodeDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>QR Code de votre éco-profil</DialogTitle>
            <DialogDescription>
              Scannez ce QR code pour accéder directement à votre éco-profil public.
            </DialogDescription>
          </DialogHeader>
          {qrCode && (
            <>
              <div className="flex items-center justify-center p-6">
                <Image src={qrCode} alt="QR Code de l'éco-profil" className="h-64 w-64" width={256} height={256} />
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={downloadQrCode}
                  variant="outline"
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger le QR Code
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}