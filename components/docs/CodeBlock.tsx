"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  className?: string;
}

function TrafficLights() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-3 w-3 rounded-full bg-red-500/80" />
      <div className="h-3 w-3 rounded-full bg-amber-500/80" />
      <div className="h-3 w-3 rounded-full bg-phosphor-400/80" />
    </div>
  );
}

export function CodeBlock({ className, children, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    if (!children) return;

    let text: string;
    const childArray = React.Children.toArray(children);
    if (childArray.length === 1 && React.isValidElement(childArray[0])) {
      text = String((childArray[0].props as any).children || "");
    } else {
      text = childArray.join("");
    }

    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="my-6 terminal-window">
      {/* Terminal Header */}
      <div className="terminal-window-header">
        <TrafficLights />
        <button
          onClick={copyToClipboard}
          className={cn(
            "ml-auto px-3 py-1 text-xs font-mono transition-all",
            "text-phosphor-400 hover:text-phosphor-300",
            "border border-phosphor-400/20 rounded hover:border-phosphor-400/40",
            "hover:bg-phosphor-400/10",
            "flex items-center gap-2"
          )}
          aria-label="Copy code"
        >
          {isCopied ? (
            <>
              <Check className="h-3 w-3" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Terminal Content */}
      <pre
        className={cn(
          "terminal-content overflow-x-auto",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-phosphor-400/20",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
