"use client"

import type { ComponentStats } from "@/lib/stats/types"
import { useComponentStats } from "@/hooks/use-component-stats"

import { ComponentDetail } from "./component-detail"
import type { ComponentDetailProps } from "./component-detail"

type ComponentDetailClientProps = Omit<
  ComponentDetailProps,
  "stats" | "onLike" | "liking" | "liked" | "onInstallCopy"
> & {
  initialStats: ComponentStats
}

export function ComponentDetailClient({
  slug,
  initialStats,
  ...props
}: ComponentDetailClientProps) {
  const { stats, liking, liked, like, recordInstall } = useComponentStats(
    slug,
    initialStats,
    { trackViewOnReload: true }
  )

  return (
    <ComponentDetail
      slug={slug}
      stats={stats}
      onLike={like}
      liking={liking}
      liked={liked}
      onInstallCopy={recordInstall}
      {...props}
    />
  )
}
