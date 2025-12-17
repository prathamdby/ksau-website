import { cn } from "@/lib/utils";

type GlowTextElement = "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";

interface GlowTextProps {
  children: React.ReactNode;
  intensity?: "sm" | "md" | "lg";
  as?: GlowTextElement;
  className?: string;
  color?: "phosphor" | "amber" | "cyan";
}

interface GlowBadgeProps {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

export function GlowBadge({ children, className, pulse = false }: GlowBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium",
        "bg-phosphor-400/10 text-phosphor-400 border border-phosphor-400/20",
        "backdrop-blur-sm",
        pulse && "animate-glow-pulse",
        className
      )}
    >
      {children}
    </span>
  );
}

interface StatusIndicatorProps {
  status?: "online" | "offline" | "busy";
  className?: string;
}

export function StatusIndicator({
  status = "online",
  className,
}: StatusIndicatorProps) {
  const statusColors = {
    online: "bg-phosphor-400",
    offline: "bg-text-ghost",
    busy: "bg-terminal-amber",
  };

  return (
    <span className={cn("relative flex h-2 w-2", className)}>
      {status === "online" && (
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            statusColors[status]
          )}
        />
      )}
      <span
        className={cn(
          "relative inline-flex rounded-full h-2 w-2",
          statusColors[status]
        )}
      />
    </span>
  );
}
