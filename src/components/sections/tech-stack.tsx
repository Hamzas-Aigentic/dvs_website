"use client";

import { TECH_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  IconBrain,
  IconAdjustmentsBolt,
  IconDatabase,
  IconCloud,
  IconChartBar,
  IconFileText,
} from "@tabler/icons-react";

const CATEGORY_ICONS = [
  <IconBrain key="0" className="size-5" />,
  <IconAdjustmentsBolt key="1" className="size-5" />,
  <IconDatabase key="2" className="size-5" />,
  <IconCloud key="3" className="size-5" />,
  <IconChartBar key="4" className="size-5" />,
  <IconFileText key="5" className="size-5" />,
];

export function TechStack() {
  return (
    <section className="relative py-4" id="tech">
      <SectionHeading
        label="Our Stack"
        title="Built on Technology That Scales"
        description="Every technology in our stack has earned its place through production deployments — not hype cycles."
      />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-4 md:grid-cols-2 lg:grid-cols-3">
        {TECH_CATEGORIES.map((cat, index) => (
          <motion.div
            key={cat.category}
            className="rounded-2xl border border-neutral-200 bg-white p-6 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-blue-500">{CATEGORY_ICONS[index]}</span>
              <h3 className="text-lg font-semibold text-neutral-900">
                {cat.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="border-neutral-200 text-neutral-600 transition-colors hover:border-blue-300 hover:text-neutral-900"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
