"use client"

import { useState } from "react"

import type { ComponentStats } from "@/lib/stats/types"
import { cn } from "@/lib/utils"

import { DemoStats } from "./demo-stats"
import { DemoToolbar, type DemoTheme } from "./demo-toolbar"
import { RegistryDemo } from "./registry-demo"

interface ComponentDemoProps {
  slug: string
  fullscreen?: boolean
  showOpenInNewTab?: boolean
  stats: ComponentStats
  onLike: () => void
  liking?: boolean
  liked?: boolean
}

export function ComponentDemo({
  slug,
  fullscreen = false,
  showOpenInNewTab = true,
  stats,
  onLike,
  liking = false,
  liked = false,
}: ComponentDemoProps) {
  const [theme, setTheme] = useState<DemoTheme>("dark")
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col overflow-hidden border transition-colors",
        fullscreen
          ? "min-h-screen rounded-none border-0"
          : "min-h-[70vh] rounded-[32px]",
        theme === "light"
          ? "border-zinc-200 bg-white"
          : "border-white/10 bg-zinc-950/60"
      )}
    >
      {/* Reserved strip so absolute toolbar/stats sit above the demo (not under hero z-30) */}
      <div className="relative z-50 h-14 shrink-0 pointer-events-none">
        <DemoToolbar
          slug={slug}
          theme={theme}
          onThemeChange={setTheme}
          onRefresh={() => setRefreshKey((key) => key + 1)}
          showOpenInNewTab={showOpenInNewTab}
          className="pointer-events-auto"
        />

        <DemoStats
          stats={stats}
          onLike={onLike}
          liking={liking}
          liked={liked}
          className="pointer-events-auto"
        />
      </div>

      <div
        data-theme={theme}
        className={cn(
          "relative z-0 flex min-h-0 flex-1 flex-col overflow-auto",
          fullscreen ? "min-h-0" : "min-h-[calc(70vh-3.5rem)]"
        )}
      >
        <RegistryDemo slug={slug} refreshKey={refreshKey} />
      </div>
    </div>
  )
}
