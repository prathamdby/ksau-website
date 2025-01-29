"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Lock, RefreshCcw, Layers, Share2, Search } from "lucide-react";
import { BentoCard, BentoGrid } from "./ui/bento-grid";

const features = [
  {
    Icon: Zap,
    name: "Lightning Fast",
    description: "Upload files at breakneck speeds, saving you valuable time.",
    href: "#features",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Lock,
    name: "Bank-Level Security",
    description: "Your files are protected with state-of-the-art encryption.",
    href: "#features",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: RefreshCcw,
    name: "Seamless Sync",
    description: "Automatically sync your uploads across all your devices.",
    href: "#features",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Layers,
    name: "Unlimited Storage",
    description:
      "Never worry about running out of space for your important files.",
    href: "#features",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Share2,
    name: "Easy Sharing",
    description: "Share files securely with customizable access controls.",
    href: "#features",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Search,
    name: "Smart Search",
    description: "Find any file instantly with powerful search capabilities.",
    href: "#features",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="features"
      className="py-20 bg-black relative overflow-hidden"
      ref={ref}
      aria-label="ksau Features"
      role="region"
    >
      <div
        className="absolute inset-0 bg-radial-gradient"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
          role="presentation"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ksau comes packed with features designed to make your file
            management effortless and efficient.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
