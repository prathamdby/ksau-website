"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Developer",
    content:
      "ksau has revolutionized the way I handle file uploads. It's incredibly fast and user-friendly!",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Sarah Lee",
    role: "Digital Marketer",
    content:
      "I've tried many file upload tools, but ksau stands out with its simplicity and powerful features.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Michael Chen",
    role: "IT Manager",
    content:
      "The security features of ksau give me peace of mind when handling sensitive company data.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-black relative overflow-hidden"
      aria-label="User Testimonials"
      role="region"
    >
      <div className="absolute inset-0 bg-grid opacity-10" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
          role="presentation"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what ksau users have to say
            about their experience.
          </p>
        </motion.div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="User testimonials list"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black p-6 rounded-lg border border-green-500/30 shadow-xl relative overflow-hidden transition-all duration-300 ease-out hover:translate-y-[-2px] hover:shadow-2xl hover:border-green-500/50"
              role="listitem"
              aria-labelledby={`testimonial-name-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-50" aria-hidden="true"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`Profile picture of ${testimonial.name}`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h3
                      id={`testimonial-name-${index}`}
                      className="text-lg font-semibold text-white"
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-400" role="doc-subtitle">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-300 italic">
                  <p>{testimonial.content}</p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
