"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, Database, Cloud } from "lucide-react";

const steps = [
  {
    icon: <Terminal className="h-8 w-8 text-blue-500" />,
    title: "Install CLI",
    description: "Download and install the ksau CLI tool on your system.",
  },
  {
    icon: <ArrowRight className="h-8 w-8 text-green-500" />,
    title: "Configure",
    description: "Set up your preferences and authentication details.",
  },
  {
    icon: <Database className="h-8 w-8 text-purple-500" />,
    title: "Select Files",
    description: "Choose the files or directories you want to upload.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-red-500" />,
    title: "Upload",
    description: "Use simple commands to upload your files to the cloud.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
              {index < steps.length - 1 && (
                <ArrowRight className="h-6 w-6 text-gray-500 mt-4 hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
