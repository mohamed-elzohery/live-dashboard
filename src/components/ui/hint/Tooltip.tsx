import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";

interface TooltipProps {
  label: string;
  children: React.ReactNode;
  align?: "center" | "start" | "end";
  side?: "right" | "left" | "bottom" | "top";
  sideOffset?: number;
  className?: string;
}

const Hint = ({
  label,
  children,
  align = "center",
  side = "top",
  sideOffset = 4,
  className,
  ...props
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className={"text-white bg-black border-black" + className}
          side={side}
          align={align}
          sideOffset={sideOffset}
          {...props}
        >
          <p className="font-semibold capitalize text-lg">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
