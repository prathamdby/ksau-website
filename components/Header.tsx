"use client";

import { useState, useEffect } from "react";
import { Upload, Home, Info, FileText, Download } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "#hero", icon: Home },
  { name: "About", url: "#about", icon: Info },
  { name: "Features", url: "#features", icon: FileText },
  { name: "Download", url: "#cta", icon: Download },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative z-50" role="banner">
      {mounted && (
        <NavBar
          items={navItems}
          className="sm:mt-4"
          aria-label="Main navigation"
        />
      )}
    </header>
  );
}
