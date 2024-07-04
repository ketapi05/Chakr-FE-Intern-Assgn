import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "./tooltip";
import { isKeyObject } from "util/types";

interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  type?: 'line' | 'text';
  text?: string;
  isCollapsed? : boolean;
}

export const Separator: React.FC<SeparatorProps> = ({ type = 'line', text, className, orientation = "horizontal", decorative = true, isCollapsed = false, ...rest }) => {
    if(isCollapsed){
        return null;
    }
    if (type === 'line') {
    return (
      <SeparatorPrimitive.Root
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )}
        {...rest}
      />
    );
  } else if (type === 'text') {
    return (
      <div className={cn("flex items-left pl-4 text-xs", className)}>
        <span className="text-sm text-gray-500">
          {text || "Default Text"}
        </span>
      </div>
    );
  }
  return null;
}

Separator.displayName = 'Separator';
