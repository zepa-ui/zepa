"use client"

import { ArrowDownToLine, Eye } from "lucide-react"

import { formatCount } from "@/lib/format-count"
import { cn } from "@/lib/utils"

import type { ComponentStats } from "@/lib/stats/types"

interface DemoStatsProps {
  stats: ComponentStats
  onLike: () => void
  liking?: boolean
  liked?: boolean
  className?: string
}

export function DemoStats({
  stats,
  onLike,
  liking = false,
  liked = false,
  className,
}: DemoStatsProps) {
  return (
    <div
      className={cn(
        "absolute right-3 top-3 z-50 flex items-center gap-3 rounded-lg border border-white/10 bg-black px-2.5 py-1.5 text-xs text-white/60 shadow-lg",
        className
      )}
    >
      <span
        title="Views"
        className="flex items-center gap-1 tabular-nums"
      >
        <Eye className="size-3.5 shrink-0" aria-hidden />
        {formatCount(stats.views)}
      </span>
      <button
        type="button"
        onClick={onLike}
        disabled={Boolean(liking || liked)}
        title={liked ? "Liked this session" : "Like this component"}
        className="flex items-center gap-1 tabular-nums transition hover:text-white disabled:opacity-50"
      >
        <span aria-hidden>❤️</span>
        {formatCount(stats.likes)}
      </button>
      <span
        title="Installs"
        className="flex items-center gap-1 tabular-nums"
      >
        <ArrowDownToLine className="size-3.5 shrink-0" aria-hidden />
        {formatCount(stats.installs)}
      </span>
    </div>
  )
}
