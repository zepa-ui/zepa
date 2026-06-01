"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { formatCategory } from "@/lib/format-category"

interface SidebarPanelProps {
  categories: string[]
  activeCategory: string
  onSelect: (category: string) => void
  onNavigate?: () => void
  showLogo?: boolean
}

export function SidebarPanel({
  categories,
  activeCategory,
  onSelect,
  onNavigate,
  showLogo = true,
}: SidebarPanelProps) {
  return (
    <>
      {showLogo ? (
        <Link
          href="/"
          onClick={onNavigate}
          className="mb-6 flex items-center rounded-lg px-2 py-2 transition hover:bg-white/5"
        >
          <img
            src="/zzepa.png"
            alt="Zepa UI"
            className="h-8 w-auto max-w-[140px] object-contain"
          />
        </Link>
      ) : null}

      <div className="space-y-1">
        {categories.map((category) => {
          const active = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                onSelect(category)
                onNavigate?.()
              }}
              className={cn(
                "flex w-full rounded-lg px-3 py-2 text-left text-sm transition",
                active
                  ? "bg-white font-medium text-black"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              )}
            >
              {formatCategory(category)}
            </button>
          )
        })}
      </div>
    </>
  )
}
