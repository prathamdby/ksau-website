import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  showTrafficLights?: boolean;
  variant?: "default" | "minimal";
}

function TrafficLights() {
  return (
    <div className="terminal-traffic-lights" aria-hidden="true">
      <div className="terminal-traffic-light terminal-traffic-light-red" />
      <div className="terminal-traffic-light terminal-traffic-light-yellow" />
      <div className="terminal-traffic-light terminal-traffic-light-green" />
    </div>
  );
}

export function TerminalWindow({
  title,
  children,
  className,
  showTrafficLights = true,
  variant = "default",
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "terminal-window",
        variant === "minimal" && "border-phosphor-400/20",
        className
      )}
    >
      {(showTrafficLights || title) && (
        <div className="terminal-window-header">
          {showTrafficLights && <TrafficLights />}
          {title && (
            <span className="ml-3 text-sm text-text-tertiary font-medium">
              {title}
            </span>
          )}
        </div>
      )}
      <div className="terminal-content">{children}</div>
    </div>
  );
}
