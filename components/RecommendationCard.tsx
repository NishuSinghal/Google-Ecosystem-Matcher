"use client";

import type { RecommendationItem } from "@/types/quiz";
import { getServiceIcon } from "@/lib/serviceIcons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type RecommendationCardProps = {
  item: RecommendationItem;
  index: number;
};

export function RecommendationCard({ item, index }: RecommendationCardProps) {
  const Icon = getServiceIcon(item.service);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.06 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl",
        "shadow-[0_18px_60px_-36px_rgba(0,0,0,0.9)]",
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -inset-24 rotate-12 bg-gradient-to-r from-indigo-500/15 via-transparent to-fuchsia-500/15 blur-2xl" />
      </div>
      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-sky-200">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="truncate text-lg font-semibold tracking-tight text-white">{item.service}</h3>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-0.5 text-xs font-semibold tabular-nums text-emerald-200">
              {item.percentage}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.reason}</p>
        </div>
      </div>
    </motion.article>
  );
}
