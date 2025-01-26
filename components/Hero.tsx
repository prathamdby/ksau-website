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
        >
          <div className="absolute inset-0 z-0 bg-radial-gradient"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
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
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-black transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px]"
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
              >
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-green-500/10 rounded-lg transform rotate-3"></div>
                  <div className="relative bg-black p-8 rounded-lg border border-green-500/30 shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                      <Upload className="h-12 w-12 text-green-500" />
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-500">
                          ksau
                        </p>
                        <p className="text-gray-500">v1.0.0</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                        <p className="text-gray-300">Lightning-fast uploads</p>
                      </div>
                      <div className="flex items-center">
                        <Lock className="h-6 w-6 text-blue-500 mr-2" />
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
