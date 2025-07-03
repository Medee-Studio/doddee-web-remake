"use client";

import { PlanAction } from "@/types";
import {
  calculateDaysUntil,
  capitalizeFirstLetter,
  getDay,
  getMonthAbbreviation,
  getYear,
  whichEmoji,
} from "@/lib/helpers";
import { whichActionStatusIcon } from "@/components/dashboard/actions/actions-components/action-status-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { JustificationModal } from "@/components/common/justification-modal";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function CardRow({
  actions,
  left,
  className,
}: {
  actions: PlanAction[];
  left: boolean;
  className?: string;
}) {
  return (
    <div>
      {actions.map((action, index) => (
        <Card
          key={index}
          className={`my-3 md:my-0 opacity-100 ${
            left
              ? index % 2 === 1
                ? "md:opacity-0"
                : ""
              : index % 2 === 0
              ? "opacity-0"
              : ""
          } min-h-[150px] ${className ?? ""}`}
        >
          <CardContent className="p-4 pb-0 pt-6 flex flex-row h-full justify-between relative">
            <div className="flex flex-col justify-between">
              <div className="absolute -top-3 left-3">
                <Badge variant="outline" className="">
                  {whichEmoji(action.action_data.action_type)}{" "}
                  {capitalizeFirstLetter(action.action_data.action_type)}
                </Badge>
              </div>
              <div className="max-w-[200px] ml-2 space-y-2 mb-2">
                <p className="text-sm overflow-hidden whitespace-normal">
                  {action.action_data.nom_action}
                </p>

                <p className="text-sm text-muted-foreground">
                  ({calculateDaysUntil(action.user_action_data.deadline)})
                </p>
              </div>
              {whichActionStatusIcon(action.user_action_data.action_status)}
            </div>
            {action.user_action_data.action_status == "en_cours" && (
              <JustificationModal action={action} />
            )}
            <div className="flex flex-row">
              <Separator orientation="vertical" className="h-full mx-3" />
              <div className="flex flex-col items-center justify-around">
                <Label className="text-md font-bold leading-none">
                  {getMonthAbbreviation(
                    new Date(action.user_action_data.deadline),
                  )}
                </Label>
                <Label className="text-3xl font-extrabold leading-none">
                  {getDay(new Date(action.user_action_data.deadline))}
                </Label>
                <Label>
                  {getYear(new Date(action.user_action_data.deadline))}
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}