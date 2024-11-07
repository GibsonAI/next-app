"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Copy } from "lucide-react";

export const CopyButton = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => {
              navigator.clipboard.writeText(value);
              setCopied(true);
            }}
          >
            <span className="sr-only">Copy {title}</span>
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy {title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
