"use client";

import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import {
  IconTerminal2,
  IconRouteAltLeft,
  IconAdjustmentsBolt,
  IconRobot,
  IconMessageChatbot,
  IconPencilBolt,
  IconDeviceDesktop,
  IconStack2,
} from "@tabler/icons-react";

const SERVICE_ICONS = [
  <IconTerminal2 key="0" />,
  <IconRouteAltLeft key="1" />,
  <IconAdjustmentsBolt key="2" />,
  <IconRobot key="3" />,
  <IconMessageChatbot key="4" />,
  <IconPencilBolt key="5" />,
  <IconDeviceDesktop key="6" />,
  <IconStack2 key="7" />,
];

function ServiceCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "group/feature relative flex flex-col py-6 md:py-10 lg:border-r border-neutral-200",
        (index === 0 || index === 4) && "lg:border-l border-neutral-200",
        index < 4 && "lg:border-b border-neutral-200"
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-50 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-50 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      <div className="relative z-10 mb-4 px-5 md:px-10 text-neutral-500">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-5 md:px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-5 md:px-10 text-sm text-neutral-500 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section className="relative" id="services">
      <SectionHeading
        label="What We Build"
        title="AI Systems That Actually Run in Production"
        description="Most AI agencies sell strategy decks or build throwaway prototypes. We do neither. Every system we ship runs daily, with real users, and improves over time."
      />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={SERVICE_ICONS[index]}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
