"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Lock, RefreshCcw, Layers, Share2, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    Icon: Zap,
    name: "Lightning Fast",
    description: "Upload at maximum speed with optimized protocols",
    command: "ksau upload --parallel",
    stat: "10x faster",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: Lock,
    name: "Bank-Level Security",
    description: "End-to-end encryption protects every file",
    command: "ksau upload --encrypt",
    stat: "AES-256",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    Icon: RefreshCcw,
    name: "Seamless Sync",
    description: "Auto-sync across all your devices",
    command: "ksau sync --watch",
    stat: "Real-time",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: Layers,
    name: "Unlimited Storage",
    description: "No limits on file size or storage",
    command: "ksau upload large.zip",
    stat: "∞ GB",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    Icon: Share2,
    name: "Easy Sharing",
    description: "Generate secure shareable links instantly",
    command: "ksau share --expiry 7d",
    stat: "1-click",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    Icon: Search,
    name: "Smart Search",
    description: "Find any file with powerful search",
    command: "ksau find '*.pdf'",
    stat: "<100ms",
    className: "md:col-span-1 md:row-span-1",
  },
];

function FeatureCard({
  feature,
  index,
  isInView,
}: {
  feature: (typeof features)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = feature.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "group relative p-6 rounded-lg",
        "bg-terminal-surface border border-border",
        "transition-all duration-300",
        "hover:border-phosphor-400/40 hover:bg-terminal-elevated",
        feature.className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-phosphor-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 rounded-md bg-phosphor-400/10 border border-phosphor-400/20">
            <Icon className="h-5 w-5 text-phosphor-400" />
          </div>
          <span className="text-xs font-medium text-phosphor-400 bg-phosphor-400/10 px-2 py-1 rounded">
            {feature.stat}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {feature.name}
        </h3>
        <p className="text-sm text-text-secondary mb-4 flex-grow">
          {feature.description}
        </p>

        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-phosphor-400">$</span>
            <code className="text-text-tertiary">{feature.command}</code>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-glow opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm text-text-tertiary mb-4">
            <span className="text-phosphor-400">{">"}</span>
            <span>ksau --features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Powerful <span className="text-phosphor-400">features</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need for efficient file management, right from your terminal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto auto-rows-fr">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.name}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 text-sm text-text-tertiary">
            <span className="h-px w-12 bg-border" />
            <span>And many more coming soon</span>
            <span className="h-px w-12 bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
