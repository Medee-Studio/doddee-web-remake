import ActionsList from "@/components/dashboard/action-list";
import { CardTitle } from "@/components/ui/card";
import KpisCards from "@/components/dashboard/kpis-cards";
import { DashboardPieChart } from "@/components/charts/pie-chart";
import { DashboardRadarChart } from "@/components/charts/radar-chart";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Action, UserAction } from "@/types";
import { getUserMoralData } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardContent() {
  const supabase = await createClient();
  const userData = await getUserMoralData(supabase);
  const actions = userData["actions"];

  const environnement = actions?.filter(
    (el: Action) => el["action_type"] == "environnement",
  );
  const social = actions?.filter((el: Action) => el["action_type"] == "social");
  const gouvEtEthique = actions?.filter(
    (el: Action) => el["action_type"] == "gouvernance",
  );
  const kpis = userData["kpis"];
  
  return (
    <>
      <DashboardHeader />
      <div className="flex flex-col space-y-6 p-6">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${actions && environnement.length != 0 && social.length != 0 && gouvEtEthique.length != 0 ? "xl:grid-cols-4" : "xl:grid-cols-3"} gap-6`}
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
      <div className="flex flex-col xl:flex-row space-x-0 space-y-6 xl:space-x-6 xl:space-y-0">
        {actions && <DashboardRadarChart data={actions} />}
        {
          <ActionsList
            actions={actions?.filter((action: UserAction) => {
              if (action.action_status == "en_cours") {
                const deadline = new Date(action.deadline);
                const currentDate = new Date();
                return deadline > currentDate;
              }
            })}
          />
        }
      </div>
      </div>
    </>
  );
} 