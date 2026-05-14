"use client";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
      <AnimatedBackground />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-5xl"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl"
        >
          <Sparkles className="h-3.5 w-3.5 text-sky-300" aria-hidden />
          Google Ecosystem Matcher
        </motion.div>
        <motion.h1
          variants={item}
          className={cn(
            "max-w-4xl text-balance font-[family-name:var(--font-geist-sans)] text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl",
          )}
        >
          Discover Your{" "}
          <span className="bg-gradient-to-r from-indigo-200 via-sky-200 to-fuchsia-200 bg-clip-text text-transparent">
            Google Ecosystem
          </span>
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          Answer ten adaptive questions. We map your workflow, constraints, and ambitions—then
          recommend the Google services that fit like they were designed for you.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/quiz" className="group relative inline-flex">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 opacity-80 blur-xl transition group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-2xl transition group-hover:bg-white/15">
              Start Assessment
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
          <p className="text-xs text-zinc-500 sm:text-sm">About two minutes · No account required</p>
        </motion.div>
        <motion.div
          variants={item}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            { t: "Adaptive branching", d: "Questions shift based on your role and priorities." },
            { t: "Groq-powered analysis", d: "Fast structured recommendations with clear rationale." },
            { t: "Premium motion design", d: "Micro-interactions tuned for focus and delight." },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <p className="text-sm font-medium text-white">{c.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{c.d}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
