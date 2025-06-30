"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RessourcesDataType } from "@/types";
import { whichEmoji } from "@/utils/helpers";
import { whichActionStatusIcon } from "@/components/dashboard/actions/actions-components/action-status-icon";
import RessourceInterneCard from "./courses-components/ressource-interne-card";
import Image from "next/image";

function extractDomain(url: string) {
  try {
    const { hostname } = new URL(url);
    return hostname.replace("www.", "");
  } catch {
    return url;
  }
}

export default function CoursesCards({ ressources }: { ressources: RessourcesDataType }) {
  const allCourses = [
    ...(ressources.ressources_internes || []),
    ...(ressources.ressources_externes || [])
  ];

  if (allCourses.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card className="w-full flex flex-col relative justify-center items-center py-8 px-4 h-[200px]">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-2">📚</p>
            <p className="text-muted-foreground text-sm">
              Aucun cours disponible pour le moment
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {ressources.ressources_internes &&
        ressources.ressources_internes.map((ressourceInterne, key) => (
          <Dialog key={`internal-${key}`}>
            <DialogTrigger asChild className="hover:cursor-pointer">
              <Card className="w-full h-full hover:shadow-md transition-shadow p-0">
                <CardContent className="p-0">
                  <div className="bg-[#e8fbff] rounded-t-xl flex p-4 flex-row items-center justify-around h-[90px]">
                    <Label className="text-md line-clamp-3 hover:cursor-pointer">
                      {ressourceInterne.nom_ressource}
                    </Label>
                  </div>
                  <div className="flex flex-row justify-between p-4">
                    <div className="flex flex-row space-x-1">
                      <p>{whichEmoji(ressourceInterne.type)}</p>
                      <div className="space-y-2">
                        <Badge variant="outline">ressource interne</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-evenly">
                      {whichActionStatusIcon(ressourceInterne.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full h-[95vh] max-h-[95vh] border-[20px] border-[#e9faff] p-0">
              <DialogHeader className="sr-only">
                <DialogTitle>{ressourceInterne.nom_ressource}</DialogTitle>
              </DialogHeader>
              <RessourceInterneCard ressource={ressourceInterne} />
            </DialogContent>
          </Dialog>
        ))}
      {ressources.ressources_externes &&
        ressources.ressources_externes.map((ressourceExterne, key) => (
          <Dialog key={`external-${key}`}>
            <DialogTrigger asChild className="hover:cursor-pointer">
              <Card className="w-full h-full hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-[#e8fbff] rounded-t-lg flex p-4 flex-row items-center justify-around h-[90px]">
                    <Label className="text-md line-clamp-3 hover:cursor-pointer">
                      {ressourceExterne.nom_ressource}
                    </Label>
                  </div>
                  <div className="flex flex-row justify-between p-4">
                    <div className="flex flex-row space-x-1">
                      <p>{whichEmoji(ressourceExterne.type)}</p>
                      <div className="space-y-2">
                        <Badge variant="outline">ressource externe</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-evenly">
                      {whichActionStatusIcon(ressourceExterne.status)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{ressourceExterne.nom_ressource}</DialogTitle>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Cette ressource est en lien avec l&apos;action: {ressourceExterne.nom_action}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={`https://www.google.com/s2/favicons?sz=64&domain_url=${extractDomain(ressourceExterne.url_ressource)}`}
                      alt="favicon"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <a
                      href={ressourceExterne.url_ressource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary underline hover:no-underline"
                    >
                      Accéder à la ressource
                    </a>
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
    </div>
  );
}