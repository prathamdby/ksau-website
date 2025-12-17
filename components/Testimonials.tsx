"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { TerminalWindow } from "@/components/ui/terminal-window";

const testimonials = [
  {
    name: "Pranaya Deomani",
    handle: "@pranayadmn",
    role: "Software Developer",
    content: "ksau has revolutionized the way I handle file uploads. It's incredibly fast and user-friendly!",
    avatar: "https://github.com/pranayadmn.png",
    timestamp: "2024-01-15 09:32:14",
  },
  {
    name: "Kardebayan",
    handle: "@kardebayan",
    role: "Android Developer",
    content: "I've tried many file upload tools, but ksau stands out with its simplicity and powerful features.",
    avatar: "https://github.com/kardebayan.png",
    timestamp: "2024-01-14 14:21:08",
  },
  {
    name: "eun0115",
    handle: "@eun0115",
    role: "System Developer",
    content: "The security features of ksau give me peace of mind when handling sensitive files.",
    avatar: "https://github.com/eun0115.png",
    timestamp: "2024-01-13 22:45:33",
  },
];

function TestimonialEntry({
  testimonial,
  index,
  isInView,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="group"
    >
      <div className="flex items-start gap-4 py-4 px-2 rounded-md transition-colors hover:bg-terminal-elevated/50">
        <div className="text-text-ghost text-xs whitespace-nowrap font-medium hidden sm:block">
          [{testimonial.timestamp}]
        </div>

        <div className="flex-shrink-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-phosphor-400/30 group-hover:border-phosphor-400/60 transition-colors">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-terminal-cyan font-medium">
              {testimonial.handle}
            </span>
            <span className="text-text-ghost text-xs">
              ({testimonial.role})
            </span>
          </div>
          <blockquote className="text-text-secondary">
            <span className="text-phosphor-400">{"> "}</span>
            <span className="italic">"{testimonial.content}"</span>
          </blockquote>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-terminal-grid opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-sm text-text-tertiary mb-4">
            <span className="text-phosphor-400">{">"}</span>
            <span>cat reviews.log</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What developers <span className="text-phosphor-400">say</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join thousands of developers who trust ksau for their file uploads.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <TerminalWindow title="reviews.log" className="overflow-hidden">
            <div className="space-y-2">
              <div className="text-xs text-text-ghost mb-4 pb-3 border-b border-border">
                <span className="text-phosphor-400">$</span> tail -f reviews.log
              </div>

              {testimonials.map((testimonial, index) => (
                <TestimonialEntry
                  key={testimonial.handle}
                  testimonial={testimonial}
                  index={index}
                  isInView={isInView}
                />
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-4 mt-4 border-t border-border"
              >
                <div className="flex items-center gap-2 text-xs text-text-ghost">
                  <span className="text-phosphor-400">$</span>
                  <span>waiting for new entries...</span>
                  <span className="cursor-blink text-phosphor-400">▌</span>
                </div>
              </motion.div>
            </div>
          </TerminalWindow>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 text-sm text-text-tertiary">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-phosphor-400">1000+</span>
              <span>Active Users</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-phosphor-400">50K+</span>
              <span>Files Uploaded</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-phosphor-400">99.9%</span>
              <span>Uptime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
