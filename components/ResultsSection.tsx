"use client";

import type { RecommendationItem } from "@/types/quiz";
import { RecommendationCard } from "@/components/RecommendationCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { RotateCcw, Share2 } from "lucide-react";
import { useCallback } from "react";

type ResultsSectionProps = {
  recommendations: RecommendationItem[];
  onRetake: () => void;
};

export function ResultsSection({ recommendations, onRetake }: ResultsSectionProps) {
  const onShare = useCallback(async () => {
    const text = recommendations
      .slice(0, 4)
      .map((r) => `${r.service} (${r.percentage})`)
      .join(" · ");
    const payload = { title: "Google Ecosystem Matcher", text, url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(payload);
        return;
      }
    } catch {
      /* ignore */
    }
    try {
      await navigator.clipboard.writeText(`${payload.title}\n${text}\n${payload.url}`);
    } catch {
      /* ignore */
    }
  }, [recommendations]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-4xl px-4 pb-16 pt-4 sm:px-6"
    >
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Your matches</p>
        <h2 className="mt-3 font-[family-name:var(--font-geist-sans)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Recommendations
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400 sm:text-base">
          Prioritized Google services based on your answers. Use this as a launchpad—not a final procurement
          decision.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {recommendations.map((r, i) => (
          <RecommendationCard key={`${r.service}-${i}`} item={r} index={i} />
        ))}
      </div>
      {recommendations.length === 0 ? (
        <p className="mt-8 text-center text-sm text-zinc-500">
          No recommendations returned. Try again—if the issue persists, confirm{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-zinc-300">GROQ_API_KEY</code>{" "}
          is set on the server.
        </p>
      ) : null}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onRetake}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.07]"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Retake Quiz
        </button>
        <button
          type="button"
          onClick={onShare}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/20 via-sky-500/15 to-fuchsia-500/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/25"
        >
          <Share2 className="h-4 w-4" aria-hidden />
          Share Results
        </button>
        <Link
          href="/"
          className="text-sm font-medium text-zinc-500 underline-offset-4 transition hover:text-zinc-300 hover:underline"
        >
          Back home
        </Link>
      </div>
    </motion.div>
  );
}
