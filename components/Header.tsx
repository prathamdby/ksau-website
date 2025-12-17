"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Home, Info, Zap, FileText, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", url: "#hero", icon: Home },
  { name: "About", url: "#about", icon: Info },
  { name: "Features", url: "#features", icon: Zap },
  { name: "Docs", url: "/docs", icon: FileText },
];

function Logo() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-phosphor-400 font-bold">{">"}</span>
      <span className="text-text-primary font-bold tracking-tight">ksau</span>
      <span className="cursor-blink text-phosphor-400 font-light">_</span>
    </div>
  );
}

function NavLink({
  item,
  isActive,
  onClick,
}: {
  item: (typeof navItems)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;
  const isExternal = item.url.startsWith("/");

  const handleClick = (e: React.MouseEvent) => {
    if (!isExternal) {
      e.preventDefault();
      const element = document.querySelector(item.url);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    onClick();
  };

  return (
    <Link
      href={item.url}
      onClick={handleClick}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-all duration-200",
        "hover:text-phosphor-400",
        isActive ? "text-phosphor-400" : "text-text-secondary"
      )}
    >
      <span className="hidden md:inline">{item.name}</span>
      <Icon className="md:hidden h-5 w-5" strokeWidth={2} />
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-phosphor-400 glow-sm"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-terminal-void/80 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-terminal-surface border-l border-border z-50 md:hidden"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <Logo />
              <button
                onClick={onClose}
                className="p-2 text-text-secondary hover:text-phosphor-400 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={(e) => {
                      if (!item.url.startsWith("/")) {
                        e.preventDefault();
                        document
                          .querySelector(item.url)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                      onClose();
                    }}
                    className="flex items-center gap-3 px-3 py-2 text-text-secondary hover:text-phosphor-400 hover:bg-terminal-elevated rounded-md transition-all"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = useCallback((name: string) => {
    setActiveTab(name);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex items-center rounded-xl border border-border bg-terminal-bg/80 backdrop-blur-md px-4 py-2.5 shadow-2xl">
          <Logo />

          <nav className="hidden md:flex items-center gap-2 flex-1 justify-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                isActive={activeTab === item.name}
                onClick={() => handleNavClick(item.name)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-4 ml-auto">
            <Link
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#cta")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-phosphor-400 text-terminal-bg hover:bg-phosphor-300 transition-all duration-200 hover:shadow-glow-sm"
            >
              <span className="text-xs opacity-70">$</span>
              <span>install</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-text-secondary hover:text-phosphor-400 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
