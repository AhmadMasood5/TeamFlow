import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip,TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Icon } from "lucide-react";

export function WorkSpaceList() {
  const organization = [
    {
      id: 1,
      name: "Teamflow 1",
      avatar: "TF",
    },
    {
      id: 2,
      name: "Teamflow 2",
      avatar: "TF 2",
    },
    {
      id: 3,
      name: "Teamflow 3",
      avatar: "TF 3",
    },
  ];
  const colorcombinations = [
    "bg-blue-500 hover:bg-blue-600 text-white",
    "bg-emerald-500 hover:bg-emerald-600 text-white",
    "bg-purple-500 hover:bg-purple-600 text-white",
    "bg-amber-500 hover:bg-amber-600 text-white",
    "bg-rose-500 hover:bg-rose-600 text-white",
    "bg-indigo-500 hover:bg-indigo-600 text-white",
    "bg-cyan-500 hover:bg-cyan-600 text-white",
    "bg-pink-500 hover:bg-pink-600 text-white",
  ];

  const getWorkspaceColor = (id: string) => {
    const charSum = id
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const colorIndex = charSum % colorcombinations.length;
    return colorcombinations[colorIndex];
  };
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-2 ">
        {organization.map((org) => (
          <Tooltip key={org.id}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className={cn('size-12 transition-all duration-200', getWorkspaceColor(org.id.toString()))}
              >
                <span className="text-sm font-semibold"> {org.avatar}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
                <p>{org.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
