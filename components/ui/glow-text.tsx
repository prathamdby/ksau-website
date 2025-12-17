import { cn } from "@/lib/utils";

type GlowTextElement = "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";

interface GlowTextProps {
  children: React.ReactNode;
  intensity?: "sm" | "md" | "lg";
  as?: GlowTextElement;
  className?: string;
  color?: "phosphor" | "amber" | "cyan";
}

export function GlowText({
  children,
  intensity = "md",
  as: Component = "span",
  className,
  color = "phosphor",
}: GlowTextProps) {
  const intensityStyles = {
    sm: "text-glow-sm",
    md: "text-glow",
    lg: "text-glow",
  };

  const colorStyles = {
    phosphor: "text-phosphor-400",
    amber: "text-terminal-amber",
    cyan: "text-terminal-cyan",
  };

  return (
    <Component
      className={cn(intensityStyles[intensity], colorStyles[color], className)}
    >
      {children}
    </Component>
  );
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

interface VersionBadgeProps {
  version: string;
  className?: string;
}

export function VersionBadge({ version, className }: VersionBadgeProps) {
  return (
    <span
      className={cn(
        "text-xs text-text-ghost font-medium tracking-wide",
        className
      )}
    >
      {version}
    </span>
  );
}