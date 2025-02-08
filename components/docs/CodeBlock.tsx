"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  className?: string;
}

export function CodeBlock({ className, children, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    if (!children) return;

    try {
      // Extract text content from the code block
      let text;
      const childArray = React.Children.toArray(children);
      if (childArray.length === 1 && React.isValidElement(childArray[0])) {
        // Handle nested code element from markdown
        text = childArray[0].props.children;
      } else {
        // Handle direct text content
        text = childArray.join("");
      }

      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="group relative">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={copyToClipboard}
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 z-10",
                "rounded-full p-1.5 md:p-2",
                "opacity-100",
                "transition-all duration-200",
                "bg-black/80",
                "text-green-500",
                "shadow-lg",
                "transform hover:scale-105",
                "ring-1 ring-green-500/20 hover:ring-green-400/30",
              )}
              aria-label="Copy code"
            >
              {isCopied ? (
                <Check className="h-3.5 w-3.5 md:h-4 md:w-4" />
              ) : (
                <Copy className="h-3.5 w-3.5 md:h-4 md:w-4" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="select-none bg-black text-green-500 border border-green-950"
          >
            {isCopied ? "Copied!" : "Copy code"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <pre
        className={cn(
          "mt-6 mb-4 overflow-x-auto rounded-lg",
          "border border-green-950",
          "bg-black",
          "p-4 shadow-xl ring-1 ring-green-900/30",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-800",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
