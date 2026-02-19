"use client";

import { DIFFERENTIATORS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

export function Differentiators() {
  return (
    <section className="relative py-4" id="why-dvs">
      <SectionHeading
        label="Why DVS"
        title="What Makes Us Different"
        description="Most AI agencies either sell strategy decks or build throwaway prototypes. DVS does neither."
      />
      <div className="mx-auto max-w-5xl space-y-5 px-4">
        {DIFFERENTIATORS.map((item, index) => (
          <motion.div
            key={item.number}
            className="group relative grid grid-cols-1 gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-colors duration-300 hover:border-blue-200 md:grid-cols-[100px_1fr] md:gap-6 md:p-8"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            {/* Number */}
            <span className="text-4xl font-bold text-neutral-200 transition-colors group-hover:text-blue-200 md:text-6xl">
              {item.number}
            </span>
            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {item.description}
              </p>
              <span className="inline-block text-sm font-medium text-blue-500">
                {item.accent}
              </span>
            </div>
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
