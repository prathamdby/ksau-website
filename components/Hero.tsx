"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Book, Check, ArrowRight } from "lucide-react";
import { TerminalWindow } from "@/components/ui/terminal-window";
import { GlowBadge, StatusIndicator } from "@/components/ui/glow-text";
import { useState, useEffect } from "react";

function UploadSimulation() {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stages = [
      { delay: 500, duration: 0 },
      { delay: 100, duration: 2000 },
      { delay: 500, duration: 0 },
    ];

    let timeout: NodeJS.Timeout;

    if (stage === 0) {
      timeout = setTimeout(() => setStage(1), stages[0].delay);
    } else if (stage === 1) {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => setStage(2), 300);
            return 100;
          }
          return p + 2;
        });
      }, 40);
      return () => clearInterval(interval);
    } else if (stage === 2) {
      timeout = setTimeout(() => {
        setStage(0);
        setProgress(0);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [stage]);

  const progressBar = "█".repeat(Math.floor(progress / 5)) + "░".repeat(20 - Math.floor(progress / 5));

  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2">
        <span className="text-phosphor-400">$</span>
        <span className="text-text-primary">ksau upload demo.zip</span>
        {stage === 0 && <span className="cursor-blink text-phosphor-400">▌</span>}
      </div>

      {stage >= 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pl-4 space-y-1"
        >
          <div className="text-text-tertiary">
            Uploading: demo.zip (2.4 MB)
          </div>
          <div className="flex items-center gap-2">
            <span className="text-phosphor-400">[{progressBar}]</span>
            <span className="text-text-secondary">{progress}%</span>
          </div>
        </motion.div>
      )}

      {stage === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="pl-4 space-y-1"
        >
          <div className="flex items-center gap-2 text-phosphor-400">
            <Check className="h-4 w-4" />
            <span>Upload complete in 2.4s</span>
          </div>
          <div className="text-text-secondary">
            <span className="text-text-tertiary">→</span>{" "}
            <span className="text-terminal-cyan underline">https://ksau.io/f3x9k</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function FeatureList() {
  const features = [
    { text: "Lightning-fast uploads", color: "text-terminal-amber" },
    { text: "End-to-end encryption", color: "text-terminal-cyan" },
    { text: "CLI-first experience", color: "text-phosphor-400" },
  ];

  return (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <motion.div
          key={feature.text}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          className="flex items-center gap-3"
        >
          <div className={`h-1.5 w-1.5 rounded-full ${feature.color.replace("text-", "bg-")}`} />
          <span className="text-text-secondary">{feature.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-terminal-grid opacity-30" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <GlowBadge>
                <StatusIndicator status="online" />
                <span>v1.0 now available</span>
              </GlowBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6"
            >
              <span className="text-text-primary">Lightning-fast</span>
              <br />
              <span className="text-phosphor-400 text-glow">file uploads</span>
              <span className="cursor-blink text-phosphor-400 font-light">_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Upload files at terminal speed. Secure, simple, and built for
              developers who live in the command line.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                size="lg"
                className="bg-phosphor-400 text-terminal-bg hover:bg-phosphor-300 transition-all duration-200 hover:shadow-glow-md font-semibold"
                onClick={() => window.open("https://web.ksauraj.eu.org/", "_blank")}
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-phosphor-400/30 text-phosphor-400 bg-transparent hover:bg-phosphor-400/10 hover:border-phosphor-400/50 transition-all duration-200"
                onClick={() => (window.location.href = "/docs")}
              >
                <Book className="mr-2 h-5 w-5" />
                Documentation
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <FeatureList />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-phosphor-400/5 rounded-2xl blur-xl" />
            <TerminalWindow title="ksau — terminal" className="relative">
              <UploadSimulation />
            </TerminalWindow>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-6 flex items-center justify-center gap-6 text-sm text-text-tertiary"
            >
              <div className="flex items-center gap-2">
                <span className="text-phosphor-400">✓</span>
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-phosphor-400">✓</span>
                <span>Open source</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-text-ghost"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ArrowRight className="h-4 w-4 rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
