"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Upload, Lock, Zap } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
          role="region"
          aria-label="Hero section"
        >
          <div
            className="absolute inset-0 z-0 bg-radial-gradient"
            aria-hidden="true"
          ></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                role="presentation"
              >
                <div className="mb-6">
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-sm font-medium bg-green-500/10 text-green-500 border border-green-500/20 backdrop-blur-sm hover:bg-green-500/20 transition-colors"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Join thousands of happy users today ✨
                  </motion.span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
                  Unleash the Power of{" "}
                  <span className="text-green-500">ksau</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8">
                  Lightning-fast file uploads for everyone, anywhere, anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-green-500 text-black hover:bg-green-600 transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px]"
                    onClick={() =>
                      window.open("https://web.ksauraj.eu.org/", "_blank")
                    }
                    aria-label="Get Started with ksau file uploads"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-black transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px]"
                    onClick={() => {
                      document
                        .querySelector("#about")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    aria-label="Learn more about ksau features"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:block"
                role="complementary"
                aria-label="Feature highlights"
              >
                <div className="relative">
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-green-500/10 rounded-lg transform rotate-3"
                    aria-hidden="true"
                  ></div>
                  <div className="relative bg-black p-8 rounded-lg border border-green-500/30 shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                      <Upload
                        className="h-12 w-12 text-green-500"
                        aria-hidden="true"
                      />
                      <div className="text-right">
                        <h2 className="text-2xl font-bold text-green-500">
                          ksau
                        </h2>
                        <p className="text-gray-500" aria-label="Version 1.0.0">
                          v1.0.0
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center" role="listitem">
                        <Zap
                          className="h-6 w-6 text-yellow-500 mr-2"
                          aria-hidden="true"
                        />
                        <p className="text-gray-300">Lightning-fast uploads</p>
                      </div>
                      <div className="flex items-center" role="listitem">
                        <Lock
                          className="h-6 w-6 text-blue-500 mr-2"
                          aria-hidden="true"
                        />
                        <p className="text-gray-300">Secure and encrypted</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-green-500/20">
                      <p className="text-sm text-gray-500">
                        Ready to revolutionize your file uploads?
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
