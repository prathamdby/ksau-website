"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="py-20 bg-black relative overflow-hidden"
      ref={ref}
      aria-label="Call to action"
      role="region"
    >
      <div
        className="absolute inset-0 bg-radial-gradient"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-8 md:p-12 shadow-2xl relative overflow-hidden"
          role="presentation"
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
            aria-hidden="true"
          ></div>
          <div className="relative z-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Revolutionize Your File Uploads?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied users and experience the power of ksau
              today. Fast, secure, and effortless file uploads are just a click
              away.
            </p>
            <Button
              size="lg"
              className="bg-green-500 text-black hover:bg-green-600 transition-all duration-300 ease-out hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(34,197,94,0.4)] active:translate-y-[0px] relative z-30"
              onClick={() =>
                window.open(
                  "https://github.com/global-index-source/ksau-go/releases/latest",
                  "_blank"
                )
              }
              aria-label="Download ksau Command Line Interface"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" aria-hidden="true" />
              Download ksau CLI
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
