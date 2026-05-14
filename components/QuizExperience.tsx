"use client";

import { AIThinkingLoader } from "@/components/AIThinkingLoader";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ProgressBar } from "@/components/ProgressBar";
import { QuizCard } from "@/components/QuizCard";
import { ResultsSection } from "@/components/ResultsSection";
import { useQuizSession } from "@/hooks/useQuizSession";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export function QuizExperience() {
  const {
    phase,
    stepIndex,
    currentQuestion,
    progress,
    recommendations,
    error,
    selectOption,
    reset,
    QUIZ_TOTAL_STEPS,
  } = useQuizSession();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [stepIndex, phase, currentQuestion?.id]);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-zinc-950/70 px-4 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Home
          </Link>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:inline">
            Assessment
          </span>
        </div>
        <div className="mx-auto mt-4 max-w-4xl">
          <ProgressBar value={progress} />
        </div>
      </header>

      <main className="relative mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-8">
        <AnimatePresence mode="wait">
          {phase === "quiz" && currentQuestion ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <QuizCard
                question={currentQuestion}
                stepLabel={`Question ${stepIndex + 1} of ${QUIZ_TOTAL_STEPS}`}
                onSelect={selectOption}
              />
            </motion.div>
          ) : null}

          {phase === "analyzing" ? (
            <motion.div
              key="thinking"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pt-8"
            >
              <AIThinkingLoader />
            </motion.div>
          ) : null}

          {phase === "results" ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {error ? (
                <p className="mb-6 text-center text-sm text-amber-200/90">
                  {error} — showing offline matches.
                </p>
              ) : null}
              <ResultsSection recommendations={recommendations} onRetake={reset} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>
    </div>
  );
}
