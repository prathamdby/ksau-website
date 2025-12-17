"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Users, Globe } from "lucide-react";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Terminal,
    title: "CLI Power",
    command: "ksau --help",
    output: ["Usage: ksau <command> [options]", "", "Commands:", "  upload    Upload files", "  list      List uploads", "  delete    Remove files"],
    description: "Full command-line control with intuitive syntax",
  },
  {
    icon: Users,
    title: "User-Friendly",
    command: "ksau upload photo.jpg",
    output: ["Uploading... done!", "Link copied to clipboard"],
    description: "Simple enough for beginners, powerful for experts",
  },
  {
    icon: Globe,
    title: "Global Access",
    command: "ksau share --public",
    output: ["Public link generated:", "https://ksau.io/share/x7k9"],
    description: "Access your files from anywhere in the world",
  },
];

function TerminalCard({
  feature,
  index,
  isInView,
}: {
  feature: (typeof features)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <TerminalWindow
        title={feature.title}
        className={cn(
          "h-full transition-all duration-300",
          "hover:border-phosphor-400/40 hover:shadow-glow-sm"
        )}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border">
            <div className="p-2 rounded-md bg-phosphor-400/10">
              <Icon className="h-5 w-5 text-phosphor-400" />
            </div>
            <p className="text-sm text-text-secondary">{feature.description}</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-phosphor-400">$</span>
              <span className="text-text-primary">{feature.command}</span>
            </div>
            <div className="pl-4 space-y-0.5">
              {feature.output.map((line, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-text-tertiary",
                    line === "" && "h-3"
                  )}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </TerminalWindow>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-terminal-grid opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm text-text-tertiary mb-4">
            <span className="text-phosphor-400">{">"}</span>
            <span>cat about.md</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Built for the <span className="text-phosphor-400">terminal</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            ksau is a modern file upload tool designed for developers who prefer
            the command line. Fast, secure, and incredibly simple.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <TerminalCard
              key={feature.title}
              feature={feature}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-terminal-surface border border-border">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-phosphor-400">$</span>
              <span className="text-text-secondary">curl -fsSL https://ksau.ksauraj.eu.org/install | bash</span>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText("curl -fsSL https://ksau.ksauraj.eu.org/install | bash")}
              className="text-xs text-text-ghost hover:text-phosphor-400 transition-colors"
            >
              copy
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
