"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

interface DocsLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const navigationItems = [
  { title: "Installation", href: "/docs/installation", prefix: "01" },
  { title: "Post Installation", href: "/docs/post-installation", prefix: "02" },
  { title: "API Reference", href: "/docs/api", prefix: "03" },
  { title: "Examples", href: "/docs/examples", prefix: "04" },
  { title: "Advanced Usage", href: "/docs/advanced", prefix: "05" },
  { title: "Troubleshooting", href: "/docs/troubleshooting", prefix: "06" },
];

export function DocsLayout({ children, className }: DocsLayoutProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const Navigation = () => {
    return (
      <div className="space-y-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "group flex items-center gap-3 px-3 py-2 text-sm transition-all",
                "hover:text-phosphor-400",
                isActive
                  ? "text-phosphor-400 bg-phosphor-400/10 border-l-2 border-phosphor-400"
                  : "text-text-secondary border-l-2 border-transparent hover:border-phosphor-400/30"
              )}
            >
              <span className="text-xs text-text-tertiary font-mono flex-shrink-0">
                {item.prefix}
              </span>
              <span className="font-mono truncate">{item.title}</span>
              {isActive && (
                <span className="ml-auto text-phosphor-400 animate-pulse flex-shrink-0">▌</span>
              )}
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-terminal-void">
      {/* Mobile Menu */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-terminal-border bg-terminal-void/95 backdrop-blur md:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-phosphor-400">$</span>
            <span className="text-sm text-text-primary">docs</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            className="text-phosphor-400 hover:bg-phosphor-400/10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-terminal-void/80 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-72 border-r border-terminal-border bg-terminal-surface md:hidden">
            <div className="border-b border-terminal-border p-4">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-phosphor-400">$</span>
                <span className="text-text-primary">ksau --help</span>
              </div>
            </div>
            <ScrollArea className="h-[calc(100vh-4rem)] p-4">
              <Navigation />
            </ScrollArea>
          </div>
        </>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col border-r border-terminal-border bg-terminal-surface">
        <div className="border-b border-terminal-border p-4">
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="text-phosphor-400">$</span>
            <span className="text-text-primary">ksau --help</span>
          </div>
        </div>
        <ScrollArea className="flex-1 p-4">
          <Navigation />
        </ScrollArea>
        <div className="border-t border-terminal-border p-4">
          <div className="text-xs text-text-tertiary font-mono">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-phosphor-400 animate-pulse" />
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:pl-72">
        <div className="h-14 md:hidden" />
        {children}
      </div>
    </div>
  );
}
