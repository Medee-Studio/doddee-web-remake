import { whichActionStatusIcon } from "@/components/dashboard/actions/actions-components/action-status-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import KpisCards from "@/components/dashboard/kpis-cards";
import { Label } from "@/components/ui/label";
import { DashboardPieChart } from "@/components/charts/pie-chart";
import { Action } from "@/types";
import { redirectToPath } from "@/lib/auth/server";
import {
  capitalizeFirstLetter,
  getStatusRedirect,
  whichEmoji,
} from "@/lib/helpers";
import { getEcoProfileById } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { Facebook, Handshake, Instagram, Linkedin } from "lucide-react";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const data = await getEcoProfileById(supabase, id);

  if (!data || !data.url_unique) {
    notFound();
  }

  const actions = data.actions;
  if (!actions) {
    const redirectPath = getStatusRedirect(
      "/not-found",
      "Cet utilisateur n'a pas encore fini d'inscrire ses actions.",
      "Veuillez ré-essayer plus tard.",
    );
    return redirectToPath(redirectPath);
  }

  const environnement = actions.filter(
    (el: Action) => el.action_type === "environnement",
  );
  const social = actions.filter((el: Action) => el.action_type === "social");
  const gouvEtEthique = actions.filter(
    (el: Action) => el.action_type === "gouvernance",
  );

  const rawCards = [
    { title: "🌱 Sa raison d'être", content: data.raison_etre },
    { title: "⭐ Ses valeurs", content: data.valeurs },
    { title: "⚡ Ses missions", content: data.missions },
    { title: "🔭 Sa vision", content: data.vision },
    { title: "💫 Le mot de l'équipe", content: data.mot_equipe },
  ];
  const cards = rawCards.filter((el) => el.content);

  return (
    <div className="p-4 max-w-7xl flex flex-col items-center mx-auto space-y-12 py-[15dvh]">
      <div>
        <div className="flex flex-row items-center space-x-2 justify-center">
          {data.logo_organisation && (
            <img
              alt="logo"
              src={data.logo_organisation}
              className="w-20 h-auto"
            />
          )}
          <p className="text-5xl font-bold text-center">
            {data.raison_sociale}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {data.labels &&
            data.labels.map((label: string, i: number) => (
              <Badge key={i} variant="secondary">
                {label}
              </Badge>
            ))}
        </div>
        <p className="text-center mt-4">{data.presentation_entreprise}</p>
      </div>

      <div className="w-full">
        <CardTitle className="mb-4 w-full">
          Son répertoire d&apos;actions RSE
        </CardTitle>
        <div className="px-10 md:px-10 xl:px-8 2xl:p-4">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {data.actions &&
                data.actions.map((action: Action, i: number) => (
                  <CarouselItem key={i} className="basis-full md:basis-1/2">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex md:flex-row flex-col md:justify-between mb-4">
                          <div className="order-1 md:order-2">
                            <Badge variant={"secondary"} className="h-[20px]">
                              <p className="mr-1">
                                {whichEmoji(action.action_type)}
                              </p>
                              <p>{capitalizeFirstLetter(action.action_type)}</p>
                            </Badge>
                          </div>
                          <p className="font-bold order-2 mt-2 md:mt-0 md:ml-2 md:order-1">
                            {action.nom_action}
                          </p>
                        </div>
                        {action.enjeu && (
                          <p className="mb-2 text-muted-foreground text-sm">
                            Enjeu : {action.enjeu.nom_enjeu.toLowerCase()}
                          </p>
                        )}
                        {whichActionStatusIcon(action.action_status)}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {data.kpis && data.kpis.length > 0 && (
        <div className="w-full">
          <CardTitle className="mb-4">Ses indicateurs d&apos;impact</CardTitle>
          <KpisCards kpis={data.kpis} />
        </div>
      )}

      <div className="w-full">
        <p className="text-2xl font-bold tracking-tight mb-2">
          Son scoring ESG
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {environnement.length > 0 && (
            <DashboardPieChart
              title={"♻️ Environnement"}
              data={environnement}
            />
          )}
          {social.length > 0 && (
            <DashboardPieChart title={"🤝🏼 Social"} data={social} />
          )}
          {gouvEtEthique.length > 0 && (
            <DashboardPieChart title={"⏱️ Gouvernance"} data={gouvEtEthique} />
          )}
          {actions.length > 0 && (
            <DashboardPieChart
              className="2xl:block xl:hidden"
              title={"Global"}
              data={actions}
            />
          )}
        </div>
      </div>

      {cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {cards.map((el, i) => (
            <Card
              key={i}
              className={`w-full p-4 ${
                cards.length % 2 !== 0 && i === cards.length - 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{el.title}</CardTitle>
              </CardHeader>
              <CardContent className="whitespace-pre-wrap">
                {el.content}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Card className="bg-[#e8fbff] w-full p-4">
        <CardTitle className="flex flex-col md:flex-row items-center text-center">
          <Handshake className="mr-2" />
          Ce rapport reflète notre engagement pour une activité responsable,
          transparente et tournée vers l&apos;avenir.
        </CardTitle>
        <CardContent className="md:ml-3 mt-4">
          <p className="text-base">
            Il a été conçu pour suivre et partager nos progrès, mettre en
            lumière les actions concrètes que nous déployons au quotidien et
            relever les défis liés à la transition sociale et écologique. En
            adoptant des pratiques respectueuses de l&apos;environnement et de
            l&apos;humain, nous affirmons notre volonté de contribuer activement à un
            avenir durable.
          </p>
          <p className="mt-4 text-base">
            Cet outil renforce également le dialogue avec nos parties prenantes,
            en rendant visibles nos démarches et en favorisant l&apos;amélioration
            continue de nos activités.
          </p>
        </CardContent>
      </Card>

      {(data.url_linkedin ||
        data.url_insta ||
        data.url_facebook) && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>🌐 Réseaux sociaux</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.url_linkedin && (
              <div className="space-y-2 items-center">
                <Label className="flex flex-row items-center">
                  <Linkedin className="inline-block mr-2 h-4 w-4" />
                  <a
                    href={data.url_linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-gray-400 hover:cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </Label>
              </div>
            )}
            {data.url_insta && (
              <div className="space-y-2">
                <Label className="flex flex-row items-center">
                  <Instagram className="inline-block mr-2 h-4 w-4" />
                  <a
                    href={data.url_insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-gray-400 hover:cursor-pointer"
                  >
                    Instagram
                  </a>
                </Label>
              </div>
            )}
            {data.url_facebook && (
              <div className="space-y-2">
                <Label className="flex flex-row items-center">
                  <Facebook className="inline-block mr-2 h-4 w-4" />
                  <a
                    href={data.url_facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-gray-400 hover:cursor-pointer"
                  >
                    Facebook
                  </a>
                </Label>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}