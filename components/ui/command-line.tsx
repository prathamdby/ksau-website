"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface CommandLineProps {
  command: string;
  output?: string[];
  typing?: boolean;
  typingSpeed?: number;
  prompt?: string;
  className?: string;
  showCursor?: boolean;
}

export function CommandLine({
  command,
  output,
  typing = false,
  typingSpeed = 50,
  prompt = "$",
  className,
  showCursor = true,
}: CommandLineProps) {
  const [displayedCommand, setDisplayedCommand] = useState(typing ? "" : command);
  const [isTypingComplete, setIsTypingComplete] = useState(!typing);

  useEffect(() => {
    if (!typing) {
      setDisplayedCommand(command);
      setIsTypingComplete(true);
      return;
    }

    let index = 0;
    setDisplayedCommand("");
    setIsTypingComplete(false);

    const interval = setInterval(() => {
      if (index < command.length) {
        setDisplayedCommand(command.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [command, typing, typingSpeed]);

  return (
    <div className={cn("font-mono text-sm", className)}>
      <div className="flex items-center gap-2">
        <span className="command-prompt">{prompt}</span>
        <span className="text-text-primary">
          {displayedCommand}
          {showCursor && !isTypingComplete && (
            <span className="cursor-blink text-phosphor-400">▌</span>
          )}
          {showCursor && isTypingComplete && (
            <span className="cursor-blink text-phosphor-400">▌</span>
          )}
        </span>
      </div>
      {output && isTypingComplete && (
        <div className="mt-2 space-y-1">
          {output.map((line, index) => (
            <div key={index} className="text-text-secondary pl-4">
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface CommandOutputProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "success" | "error" | "warning";
}

export function CommandOutput({
  children,
  className,
  variant = "default",
}: CommandOutputProps) {
  const variantStyles = {
    default: "text-text-secondary",
    success: "text-phosphor-400",
    error: "text-terminal-red",
    warning: "text-terminal-amber",
  };

  return (
    <div className={cn("font-mono text-sm pl-4", variantStyles[variant], className)}>
      {children}
    </div>
  );
}

interface CommandBlockProps {
  commands: Array<{
    command: string;
    output?: string[];
    prompt?: string;
  }>;
  className?: string;
}

export function CommandBlock({ commands, className }: CommandBlockProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {commands.map((cmd, index) => (
        <CommandLine
          key={index}
          command={cmd.command}
          output={cmd.output}
          prompt={cmd.prompt}
          showCursor={index === commands.length - 1}
        />
      ))}
    </div>
  );
}