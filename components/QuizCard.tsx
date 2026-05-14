"use client";

import type { QuizQuestion } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

type QuizCardProps = {
  question: QuizQuestion;
  stepLabel: string;
  onSelect: (optionId: string, optionLabel: string) => void;
};

export function QuizCard({ question, stepLabel, onSelect }: QuizCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const opts = question.options;
      const n = opts.length;
      if (n === 0) return;
      const digit = e.key >= "1" && e.key <= "9" ? parseInt(e.key, 10) : null;
      if (digit && digit >= 1 && digit <= n) {
        e.preventDefault();
        const o = opts[digit - 1];
        onSelect(o.id, o.label);
        return;
      }
      if (e.key === "Enter") {
        const root = containerRef.current;
        const active = root?.querySelector<HTMLElement>("button.option:focus-visible, button.option:focus");
        if (active?.dataset.optionId && active.dataset.optionLabel) {
          e.preventDefault();
          onSelect(active.dataset.optionId, active.dataset.optionLabel);
        }
      }
    },
    [onSelect, question.options],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-fuchsia-500/10" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{stepLabel}</p>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-geist-sans)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {question.prompt}
            </h2>
            {question.subtitle ? (
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{question.subtitle}</p>
            ) : null}
            <div className="mt-8 grid gap-3 sm:gap-4">
              {question.options.map((opt, idx) => (
                <motion.button
                  key={opt.id}
                  type="button"
                  data-option-id={opt.id}
                  data-option-label={opt.label}
                  className={cn(
                    "option group relative flex w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left outline-none transition",
                    "hover:border-white/20 hover:bg-white/[0.06] focus-visible:ring-2 focus-visible:ring-sky-400/80",
                  )}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => onSelect(opt.id, opt.label)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-semibold text-zinc-300">
                    {idx + 1}
                  </span>
                  <span className="ml-4 flex min-w-0 flex-1 flex-col">
                    <span className="text-sm font-semibold text-white sm:text-base">{opt.label}</span>
                    {opt.description ? (
                      <span className="mt-1 text-sm text-zinc-500">{opt.description}</span>
                    ) : null}
                  </span>
                  <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-sky-500/5 to-fuchsia-500/10" />
                  </span>
                </motion.button>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-zinc-600">
              Tip: press <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">1</kbd>
              –
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">{question.options.length}</kbd>{" "}
              to choose · <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400">Enter</kbd>{" "}
              confirms focus
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
