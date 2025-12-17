"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  ArrowDownToLine,
  BookOpen,
  BookText,
  Code2,
  FlaskConical,
  HelpCircle,
  Menu,
  Settings,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

interface DocsLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const navigationItems = [
  { title: "Installation", href: "/docs/installation", icon: ArrowDownToLine },
  {
    title: "Post Installation",
    href: "/docs/post-installation",
    icon: Settings,
  },
  { title: "API Reference", href: "/docs/api", icon: Code2 },
  { title: "Examples", href: "/docs/examples", icon: BookText },
  { title: "Advanced Usage", href: "/docs/advanced", icon: FlaskConical },
  { title: "Troubleshooting", href: "/docs/troubleshooting", icon: HelpCircle },
];

export function DocsLayout({ children, className }: DocsLayoutProps) {
  const [open, setOpen] = useState(false);

  const Navigation = () => {
    const pathname =
      typeof window !== "undefined" ? window.location.pathname : "";

    return (
      <>
        <div className="flex items-center gap-2 px-2 pb-6">
          <BookOpen className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold tracking-tight">
            Documentation
          </h3>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <NavigationMenu
            orientation="vertical"
            className="flex w-full flex-col"
          >
            <NavigationMenuList className="flex-col items-start gap-2 p-0 w-full">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem
                    key={item.href}
                    className="w-full m-0 first:ml-1"
                  >
                    <Link href={item.href}>
                      {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                      }
                      <NavigationMenuLink
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg py-2.5 text-sm font-medium transition-colors",
                          "hover:bg-primary/10 hover:text-primary active:scale-[0.98]",
                          "focus:bg-primary/10 focus:text-primary focus:outline-none",
                          isActive && "bg-primary/10 text-primary",
                          "px-4", // Explicit padding
                        )}
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </ScrollArea>
      </>
    );
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Menu */}
      <div className="fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h3 className="text-base font-semibold tracking-tight">Docs</h3>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-[300px] p-0">
              <div className="border-b bg-muted/40 p-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-semibold tracking-tight">
                    Documentation
                  </h3>
                </div>
              </div>
              <div className="px-4 py-6">
                <Navigation />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden border-r bg-muted/40 md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col lg:w-72">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5">
          <div className="px-4">
            <div className="pl-2">
              <Navigation />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:pl-64 lg:pl-72">
        <div className="relative">
          {/* Mobile Header Spacer */}
          <div className="h-16 md:hidden" />
          <div className="px-4 pb-16 pt-6 md:px-8 md:pb-20 md:pt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
