"use client";

import { TECH_LOGOS } from "@/lib/constants";
import { motion } from "framer-motion";

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-6 text-neutral-400 transition-colors hover:text-neutral-600">
      <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function LogoCloud() {
  const doubled = [...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative space-y-4 border-t border-neutral-200 pt-8 pb-12"
    >
      <h2 className="text-center text-sm font-medium tracking-wide text-neutral-400 uppercase">
        Built with{" "}
        <span className="text-neutral-600">industry-leading</span> AI
        infrastructure
      </h2>
      <div className="relative mx-auto max-w-4xl overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex w-max items-center py-4">
          {doubled.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
