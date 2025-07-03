import ActionsList from "@/components/dashboard/actions/action-list";
import { CardTitle } from "@/components/ui/card";
import KpisCards from "@/components/dashboard/kpis-cards";
import NPSCard from "@/components/dashboard/nps-card";
import { DashboardPieChart } from "@/components/charts/pie-chart";
import { DashboardRadarChart } from "@/components/charts/radar-chart";
import { PageHeader } from "@/components/common/page-header";
import { Action, UserAction, UserMoralData } from "@/types";
import { getUserMoralData } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardContent() {
  const supabase = await createClient();
  const userData = (await getUserMoralData(supabase)) as UserMoralData;
  const actions = userData["actions"];
  const npsData = userData["nps"];

  const environnement = actions?.filter(
    (el: Action) => el["action_type"] == "environnement"
  );
  const social = actions?.filter((el: Action) => el["action_type"] == "social");
  const gouvEtEthique = actions?.filter(
    (el: Action) => el["action_type"] == "gouvernance"
  );
  const kpis = userData["kpis"];

  return (
    <>
      <PageHeader title="Tableau de bord" />
      <div className="flex flex-col space-y-6 p-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            actions &&
            environnement.length != 0 &&
            social.length != 0 &&
            gouvEtEthique.length != 0
              ? "xl:grid-cols-4"
              : "xl:grid-cols-3"
          } gap-6`}
        >
          <DashboardPieChart title={"♻️ Environnement"} data={environnement} />
          <DashboardPieChart title={"🤝🏼 Social"} data={social} />
          <DashboardPieChart title={"⏱️ Gouvernance"} data={gouvEtEthique} />
          {actions &&
            environnement.length != 0 &&
            social.length != 0 &&
            gouvEtEthique.length != 0 && (
              <DashboardPieChart title={"Global"} data={actions} />
            )}
        </div>
        <CardTitle>Vos indicateurs d&apos;impact RSE</CardTitle>
        <KpisCards kpis={kpis} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {actions && (
            <div className="md:col-span-1 xl:col-span-2 w-full">
              <DashboardRadarChart data={actions} />
            </div>
          )}
          <div className="md:col-span-1 xl:col-span-2 w-full">
            <ActionsList
              actions={(actions ?? []).filter(
                (action): action is UserAction => {
                  if (action.action_status !== "en_cours") return false;
                  const userAction = action as UserAction;
                  if (!userAction.deadline) return false;
                  return new Date(userAction.deadline) > new Date();
                }
              )}
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-1">
          <NPSCard npsData={npsData} />
        </div>
      </div>
    </>
  );
}
