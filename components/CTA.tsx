"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Copy, Check, ExternalLink } from "lucide-react";
import { TerminalWindow } from "@/components/ui/terminal-window";

const installCommand = "curl -fsSL https://ksau.io/install | bash";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-md hover:bg-terminal-elevated transition-colors text-text-tertiary hover:text-phosphor-400"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check className="h-4 w-4 text-phosphor-400" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cta"
      ref={ref}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <div className="absolute inset-0 bg-terminal-grid opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-sm text-text-tertiary mb-4"
            >
              <span className="text-phosphor-400">{">"}</span>
              <span>ready to start?</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Start uploading in{" "}
              <span className="text-phosphor-400 text-glow">seconds</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              One command to install. Zero configuration needed.
              Join thousands of developers using ksau.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <TerminalWindow
              title="installation"
              className="border-phosphor-400/30 shadow-glow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <span className="text-phosphor-400 flex-shrink-0">$</span>
                  <code className="text-text-primary whitespace-nowrap">
                    {installCommand}
                  </code>
                </div>
                <CopyButton text={installCommand} />
              </div>
            </TerminalWindow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-phosphor-400 text-terminal-bg hover:bg-phosphor-300 transition-all duration-200 hover:shadow-glow-md font-semibold"
              onClick={() => (window.location.href = "/docs/installation")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download ksau CLI
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-phosphor-400/30 text-phosphor-400 bg-transparent hover:bg-phosphor-400/10 hover:border-phosphor-400/50 transition-all duration-200"
              onClick={() => window.open("https://web.ksauraj.eu.org/", "_blank")}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Try Web Version
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-text-tertiary">
              <div className="flex items-center gap-2">
                <span className="text-phosphor-400">✓</span>
                <span>Free & Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-phosphor-400">✓</span>
                <span>No Account Required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-phosphor-400">✓</span>
                <span>Works on Linux, macOS, Windows</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
