import { UserAction } from "@/types";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ActionsList({ actions }: { actions: UserAction[] }) {
  return (
    <Card className="xl:w-1/2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Actions en cours
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        {actions && actions.length > 0 ? (
          <div className="space-y-4">
            {actions.slice(0, 5).map((action) => (
              <div
                key={action.id}
                className="flex items-start gap-3 p-3 rounded-lg border bg-card"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {action.action_type === 'environnement' && '♻️'}
                      {action.action_type === 'social' && '🤝🏼'}
                      {action.action_type === 'gouvernance' && '⏱️'}
                    </span>
                    <span className="text-sm font-medium capitalize">
                      {action.action_type}
                    </span>
                  </div>
                  {action.enjeu && (
                    <p className="text-sm text-muted-foreground">
                      {action.enjeu.nom_enjeu}
                    </p>
                  )}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>
                      Échéance: {new Date(action.deadline).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    action.action_status === 'en_cours' 
                      ? 'bg-blue-100 text-blue-800' 
                      : action.action_status === 'en_cours_validation'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {action.action_status === 'en_cours' && 'En cours'}
                    {action.action_status === 'en_cours_validation' && 'En validation'}
                    {action.action_status === 'disponible' && 'Disponible'}
                    {action.action_status === 'valide' && 'Validé'}
                  </span>
                </div>
              </div>
            ))}
            {actions.length > 5 && (
              <p className="text-sm text-muted-foreground text-center">
                et {actions.length - 5} action(s) de plus...
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center h-full">
            <Clock className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground">
              Aucune action en cours pour le moment.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}