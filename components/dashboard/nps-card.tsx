import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NPSData } from "@/types";

interface NPSCardProps {
  npsData: NPSData;
}

export default function NPSCard({ npsData }: NPSCardProps) {
  const { total_responses, nps_score, promoters, passives, detractors, average_score } = npsData;

  // Determine NPS score color and label
  const getNPSColor = (score: number | null) => {
    if (score === null) return "bg-gray-500";
    if (score >= 70) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    if (score >= 0) return "bg-orange-500";
    return "bg-red-500";
  };

  const getNPSLabel = (score: number | null) => {
    if (score === null) return "Pas de données";
    if (score >= 70) return "Excellent";
    if (score >= 50) return "Bon";
    if (score >= 0) return "Passable";
    return "À améliorer";
  };

  return (
    <Card className="w-full xl:h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          Net Promoter Score (NPS)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {total_responses === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p className="text-2xl mb-2">📊</p>
            <p className="text-sm">Aucune évaluation reçue</p>
            <p className="text-xs text-gray-400 mt-1">
              Partagez votre éco-profil pour recevoir des évaluations
            </p>
          </div>
        ) : (
          <>
            {/* Main NPS Score Display */}
            <div className="text-center py-4 space-y-2">
              <div className="text-3xl font-bold">
                {nps_score !== null ? nps_score : "N/A"}
              </div>
              <div className="flex justify-center">
                <Badge className={`${getNPSColor(nps_score)} text-white`}>{getNPSLabel(nps_score)}</Badge>
              </div>
              <div className="text-sm text-gray-600">Score NPS</div>
              {average_score !== null && (
                <div className="text-xs text-gray-500 mt-1">
                  Note moyenne: {Number(average_score).toFixed(1)}/10
                </div>
              )}
            </div>

            {/* Response Distribution */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-700">
                Répartition des réponses ({total_responses} total{total_responses > 1 ? 's' : ''})
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="text-lg font-semibold text-red-600">{detractors}</div>
                  <div className="text-xs text-red-600">Détracteurs</div>
                  <div className="text-xs text-gray-500">(0-6)</div>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-lg font-semibold text-yellow-600">{passives}</div>
                  <div className="text-xs text-yellow-600">Neutres</div>
                  <div className="text-xs text-gray-500">(7-8)</div>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-lg font-semibold text-green-600">{promoters}</div>
                  <div className="text-xs text-green-600">Promoteurs</div>
                  <div className="text-xs text-gray-500">(9-10)</div>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
} 