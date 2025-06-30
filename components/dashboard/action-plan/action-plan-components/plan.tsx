import { PlanAction } from "@/types";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import CardRow from "./card-row";

export default function Plan({ actions }: { actions: PlanAction[] }) {
  return (
    <div className="space-y-6 mt-6">
      <div className="flex flex-col">
        <Label className="text-3xl font-bold text-center">
          Votre plan d&apos;action
        </Label>
        <Label className="text-xl text-center">Vers un impact positif</Label>
      </div>
      <div className="w-full flex flex-row justify-center gap-6 relative">
        <CardRow actions={actions} left={true} />

        <div className="hidden md:flex flex-col justify-between py-[75px]">
          {actions.map((_, index) => (
            <div key={index} className="h-2 w-2 bg-primary rounded-full" />
          ))}
        </div>
        <CardRow actions={actions} left={false} className="hidden md:block" />
        <div className="hidden md:flex h-full w-full absolute justify-center z-[-1]">
          <Separator orientation="vertical" className="h-full" />
        </div>
      </div>
    </div>
  );
}