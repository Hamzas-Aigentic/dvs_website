"use client";

import { type MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";
import { useNumberCycler } from "@/hooks/use-number-cycler";
import { useIsMobile } from "@/hooks/use-is-mobile";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  BarChart3,
} from "lucide-react";

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

const STEP_ICONS = [Search, PenTool, Code2, Rocket, BarChart3];

const STEP_COLORS = [
  "from-blue-500/10 to-blue-600/5",
  "from-indigo-500/10 to-indigo-600/5",
  "from-violet-500/10 to-violet-600/5",
  "from-sky-500/10 to-sky-600/5",
  "from-emerald-500/10 to-emerald-600/5",
];

const STEP_ICON_COLORS = [
  "text-blue-500",
  "text-indigo-500",
  "text-violet-500",
  "text-sky-500",
  "text-emerald-500",
];

const stepVariants: Variants = {
  inactive: { scale: 0.9, opacity: 0.7 },
  active: { scale: 1, opacity: 1 },
};

function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

function ProcessCard({
  children,
  step,
}: {
  children: React.ReactNode;
  step: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useIsMobile();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="animated-cards group relative w-full rounded-2xl"
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-colors duration-300">
        <div className="m-8 min-h-[400px] w-full md:m-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex w-full flex-col gap-4 md:w-3/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="text-sm font-semibold uppercase tracking-wider text-blue-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.05,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {PROCESS_STEPS[step].name}
              </motion.div>
              <motion.h2
                className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {PROCESS_STEPS[step].title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.15,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-base leading-relaxed text-neutral-600">
                  {PROCESS_STEPS[step].description}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

function StepsNav({
  current,
  onChange,
}: {
  current: number;
  onChange: (index: number) => void;
}) {
  return (
    <nav aria-label="Process steps" className="flex justify-center px-4">
      <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
        {PROCESS_STEPS.map((step, stepIdx) => {
          const isCompleted = current > stepIdx;
          const isCurrent = current === stepIdx;
          return (
            <motion.li
              key={step.name}
              initial="inactive"
              animate={isCurrent ? "active" : "inactive"}
              variants={stepVariants}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <button
                type="button"
                className={cn(
                  "group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                  isCurrent
                    ? "bg-blue-500 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                    isCompleted
                      ? "bg-blue-500 text-white"
                      : isCurrent
                        ? "bg-blue-400 text-white"
                        : "bg-neutral-200 text-neutral-600 group-hover:bg-neutral-300"
                  )}
                >
                  {isCompleted ? (
                    <IconCheck className="h-3.5 w-3.5" />
                  ) : (
                    <span className="text-xs">{stepIdx + 1}</span>
                  )}
                </span>
                <span className="hidden sm:inline-block">{step.name}</span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

function StepIllustration({ step }: { step: number }) {
  const Icon = STEP_ICONS[step];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
        className="absolute right-4 top-4 md:right-8 md:top-auto md:bottom-8"
      >
        <div
          className={cn(
            "flex h-48 w-48 items-center justify-center rounded-2xl bg-gradient-to-br md:h-64 md:w-64",
            STEP_COLORS[step]
          )}
        >
          <Icon className={cn("size-16 md:size-20", STEP_ICON_COLORS[step])} strokeWidth={1.2} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProcessCarousel() {
  const { currentNumber: step, setStep } = useNumberCycler(5, 5000);

  return (
    <section className="relative" id="process">
      <SectionHeading
        label="Our Process"
        title="From Discovery to Deployment"
        description="Every engagement follows a proven five-phase process. No shortcuts, no handoffs, no gaps."
      />
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 p-4">
        <ProcessCard step={step}>
          <StepIllustration step={step} />
        </ProcessCard>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StepsNav current={step} onChange={setStep} />
        </motion.div>
      </div>
    </section>
  );
}
