"use client";

import type React from "react";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
      e.preventDefault();
      setActiveTab(item.name);
      const element = document.querySelector(item.url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 h-fit pointer-events-none",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-black/50 border border-green-500/20 backdrop-blur-lg py-1 px-4 rounded-full shadow-lg pointer-events-auto">
        <div className="flex items-center gap-2 mr-2">
          <Upload className="h-5 w-5 text-green-500" />
          <span className="text-green-500 font-bold hidden md:inline">
            ksau
          </span>
        </div>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ease-out",
                "text-gray-400 hover:text-green-500 hover:scale-105",
                isActive && "text-green-500",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-green-500/10 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-green-500 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-green-500/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-green-500/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-green-500/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
