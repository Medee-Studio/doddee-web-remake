import { PageHeader } from "@/components/common/page-header";
import {  getAllKpisForUser } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { KpiCard } from "@/components/dashboard/kpis/kpi-card";

export default async function KpisContent() {
  const supabase = await createClient();

  const kpis = await getAllKpisForUser(supabase);


  return (
    <>
      <PageHeader title="Indicateurs de performance (KPIs)" />
      <div className="p-6">
        {!kpis || kpis.length === 0 ? (
          <p className="text-muted-foreground">Aucun KPI disponible pour le moment.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kpis.map((kpi) => (
              <KpiCard key={kpi.id_kpi} kpi={kpi} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}