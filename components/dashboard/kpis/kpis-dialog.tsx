import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QuestionType } from "@/types";

const KpisDialog = ({
  item,
  formIdx,
}: {
  item: QuestionType;
  formIdx: number;
}) => {
  const getEmojiForType = (index: number) => {
    switch (index) {
      case 0: return "♻️";
      case 1: return "🤝🏼";
      case 2: return "⏱️";
      default: return "📊";
    }
  };

  const getTypeLabel = (index: number) => {
    switch (index) {
      case 0: return "Environnement";
      case 1: return "Social";
      case 2: return "Gouvernance";
      default: return "KPI";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-gray-400 text-xs p-0 ml-2">
          Voir plus ...
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full md:w-2/3">
        <DialogHeader className="flex flex-col h-auto">
          <div className="flex flex-row items-center">
            <p className="text-2xl">
              {getEmojiForType(formIdx)}
            </p>
            <DialogTitle className="mx-auto text-gray-600 rounded-2xl p-2 border border-gray-400 mb-1">
              {getTypeLabel(formIdx)}
            </DialogTitle>
          </div>
          <hr />
          <DialogTitle className="text-center flex-1 text-xl pt-6">
            {item.supabaseColumnName
              .replace(/%/, "Part")
              .replace(/m³/, "Quantité en m³")}
            <hr color="#2effa4" className="w-1/3 h-0.5 mx-auto mt-3" />
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4 max-h-96 overflow-y-auto">
          <p className="whitespace-pre-line">
            {item.infos?.replace(/\n/g, "\n\n")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KpisDialog;