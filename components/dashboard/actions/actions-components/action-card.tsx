"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ActionFormDataType } from "@/types";
import { cn } from "@/lib/utils";

type ActionCardProps = {
  action: ActionFormDataType;
  buttonType: "select" | "delete";
  onSelect: (action: ActionFormDataType, date?: Date) => Promise<void>;
};

export default function ActionCard({
  action,
  buttonType,
  onSelect,
}: ActionCardProps) {
  const [showDateDialog, setShowDateDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleButtonClick = () => {
    if (buttonType === "select") {
      setShowDateDialog(true);
    } else {
      onSelect(action);
    }
  };

  const handleConfirmSelection = () => {
    onSelect(action, selectedDate);
    setShowDateDialog(false);
    setSelectedDate(undefined);
  };

  const getDifficultyColor = (nombre_sablier: number) => {
    if (nombre_sablier <= 2) return "bg-green-100 text-green-800 border-green-300";
    if (nombre_sablier <= 4) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    return "bg-red-100 text-red-800 border-red-300";
  };

  const getEffortColor = (nombre_bonhomme: number) => {
    if (nombre_bonhomme <= 2) return "bg-blue-100 text-blue-800 border-blue-300";
    if (nombre_bonhomme <= 4) return "bg-purple-100 text-purple-800 border-purple-300";
    return "bg-pink-100 text-pink-800 border-pink-300";
  };

  const getCostColor = (nombre_billet: number) => {
    if (nombre_billet <= 2) return "bg-gray-100 text-gray-800 border-gray-300";
    if (nombre_billet <= 4) return "bg-orange-100 text-orange-800 border-orange-300";
    return "bg-red-100 text-red-800 border-red-300";
  };

  return (
    <>
      <Card className="h-full flex flex-col">
        <CardContent className="flex flex-col justify-between flex-1">
          <h3 className="font-semibold mb-3 line-clamp-2">
            {action.nom_action}
          </h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={getDifficultyColor(action.nombre_sablier)}>
                ⏳ {action.nombre_sablier}
              </Badge>
              <span className="text-xs text-muted-foreground">Difficulté</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={getEffortColor(action.nombre_bonhomme)}>
                👤 {action.nombre_bonhomme}
              </Badge>
              <span className="text-xs text-muted-foreground">Effort</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={getCostColor(action.nombre_billet)}>
                💰 {action.nombre_billet}
              </Badge>
              <span className="text-xs text-muted-foreground">Coût</span>
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
              {action.benefice_entreprise}
            </p>
            
            <Button
              size="sm"
              variant={buttonType === "delete" ? "secondary" : "default"}
              className="w-full"
              onClick={handleButtonClick}
            >
              {buttonType === "delete" ? "Retirer" : "Sélectionner"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDateDialog} onOpenChange={setShowDateDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Définir une échéance</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Sélectionnez une date d&apos;échéance pour l&apos;action &quot;{action.nom_action}&quot; (optionnel)
            </p>
            
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {selectedDate ? (
                    format(selectedDate, "PPP", { locale: fr })
                  ) : (
                    "Choisir une date"
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setIsCalendarOpen(false);
                  }}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDateDialog(false)}>
              Annuler
            </Button>
            <Button onClick={handleConfirmSelection}>
              Confirmer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}