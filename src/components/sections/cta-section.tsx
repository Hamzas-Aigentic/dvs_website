"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-neutral-50 py-16 md:py-32"
      id="contact"
    >
      {/* Background glow */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl space-y-8 px-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          Ready to Build?
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
          Let&apos;s Turn Your AI Vision Into a Production System
        </h2>
        <p className="mx-auto max-w-xl text-lg text-neutral-600 leading-relaxed md:text-xl">
          Reach out and we&apos;ll map your processes, identify automation
          opportunities, and tell you honestly if AI is the right solution.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <a href="mailto:hamza@digitalvaultsolutionsllc.com">
            <Button
              size="lg"
              className="w-full rounded-full bg-blue-500 px-4 text-white hover:bg-blue-600 sm:w-auto sm:px-8 sm:text-lg"
            >
              <Mail className="mr-2 size-5" />
              hamza@digitalvaultsolutionsllc.com
            </Button>
          </a>
        </div>
        <p className="text-sm text-neutral-500">
          No sales pitch. No commitment. Just a technical conversation about
          what&apos;s possible.
        </p>
      </div>
    </motion.section>
  );
}
