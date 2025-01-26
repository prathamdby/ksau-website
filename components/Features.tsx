"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Lock, RefreshCcw, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Upload files at breakneck speeds, saving you valuable time.",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Your files are protected with state-of-the-art encryption.",
  },
  {
    icon: RefreshCcw,
    title: "Seamless Sync",
    description: "Automatically sync your uploads across all your devices.",
  },
  {
    icon: Layers,
    title: "Unlimited Storage",
    description:
      "Never worry about running out of space for your important files.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="features"
      className="py-20 bg-black relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-radial-gradient"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ksau comes packed with features designed to make your file
            management effortless and efficient.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg border border-green-500/30 shadow-xl relative overflow-hidden transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-2xl hover:border-green-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <feature.icon className="h-12 w-12 text-green-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
