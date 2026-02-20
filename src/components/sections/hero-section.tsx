"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative mx-auto w-full max-w-5xl" id="hero">
      {/* Top radial gradient shade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
      >
        <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,rgba(59,130,246,0.06),transparent)] contain-strict" />
      </div>

      {/* Outer decorative border lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
      >
        <div className="absolute inset-y-0 left-0 z-10 h-full w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 h-full w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center gap-5 pt-36 pb-24">
        {/* Inner decorative border lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-[1] size-full overflow-hidden"
        >
          <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-transparent via-neutral-200 to-neutral-200 md:left-8" />
          <div className="absolute inset-y-0 right-4 w-px bg-gradient-to-b from-transparent via-neutral-200 to-neutral-200 md:right-8" />
          <div className="absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-neutral-100 to-neutral-100 md:left-12" />
          <div className="absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-neutral-100 to-neutral-100 md:right-12" />
        </div>

        {/* Pill badge */}
        <a
          className={cn(
            "group mx-auto flex w-fit items-center gap-3 rounded-full border border-neutral-200 bg-white px-3 py-1 shadow-sm",
            "animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-700 delay-500"
          )}
          href="#services"
        >
          <Zap className="size-3 text-blue-500" />
          <span className="text-xs text-neutral-600">
            AI automation that ships — not slides.
          </span>
          <span className="block h-4 border-l border-neutral-200" />
          <ArrowRight className="size-3 text-neutral-400 transition-transform duration-150 ease-out group-hover:translate-x-1" />
        </a>

        {/* Heading */}
        <h1
          className={cn(
            "text-balance text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl",
            "animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-700 delay-100"
          )}
        >
          We Don&apos;t Just Advise on AI{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            We Build It.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "mx-auto max-w-lg px-4 text-center text-base text-neutral-600 sm:text-lg md:text-xl leading-relaxed",
            "animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-700 delay-200"
          )}
        >
          Production-grade AI systems, intelligent automation,
          <br className="hidden sm:block" />
          and full-stack delivery. From discovery to deployment.
        </p>

        {/* CTA Buttons */}
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row",
            "animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-700 delay-300"
          )}
        >
          <a href="mailto:hamza@digitalvaultsolutionsllc.com" className="w-full sm:w-auto">
            <Button
              className="w-full rounded-full border-neutral-300 sm:w-auto"
              size="lg"
              variant="outline"
            >
              <Mail className="mr-2 size-4" />
              Get in Touch
            </Button>
          </a>
          <Button
            className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white sm:w-auto"
            size="lg"
          >
            See Our Services
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
