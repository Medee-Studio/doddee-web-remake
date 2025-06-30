import { ActionStatus } from "@/types";
import { Check, CheckCircle, Clock } from "lucide-react";
import { Label } from "@/components/ui/label";

export function whichActionStatusIcon(status: ActionStatus) {
  switch (status) {
    case "valide":
      return (
        <div className="flex flex-row space-x-1 items-center">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <Label>Valide</Label>
        </div>
      );
    case "en_cours_validation":
      return (
        <div className="flex flex-row space-x-1 items-center">
          <CheckCircle className="h-4 w-4 text-yellow-500" />
          <Label>Validation en cours</Label>
        </div>
      );
    case "disponible":
      return (
        <div className="flex flex-row space-x-1 items-center">
          <Check className="h-4 w-4 text-green-500" />
          <Label>Disponible</Label>
        </div>
      );
    case "en_cours":
      return (
        <div className="flex flex-row space-x-1 items-center">
          <Clock className="h-4 w-4 text-yellow-500" />
          <Label>En cours</Label>
        </div>
      );
    default:
      return null;
  }
}