"use client"

import type { ComponentStats } from "@/lib/stats/types"
import { useComponentStats } from "@/hooks/use-component-stats"

import { ComponentDemo } from "./component-demo"

interface FullscreenDemoProps {
  slug: string
  initialStats: ComponentStats
}

export function FullscreenDemo({ slug, initialStats }: FullscreenDemoProps) {
  const { stats, liking, liked, like } = useComponentStats(slug, initialStats)

  return (
    <ComponentDemo
      slug={slug}
      fullscreen
      showOpenInNewTab={false}
      stats={stats}
      onLike={like}
      liking={liking}
      liked={liked}
    />
  )
}
