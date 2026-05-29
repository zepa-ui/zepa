"use client"

import Link from "next/link"

interface SidebarProps {
  categories: string[]
  activeCategory: string
  onSelect: (category: string) => void
}

export function Sidebar({
  categories,
  activeCategory,
  onSelect,
}: SidebarProps) {
  return (
    <aside className="w-sidebar shrink-0 border-r border-white/10 bg-zinc-900/40 p-4">
      <Link
        href="/"
        className="mb-6 flex items-center rounded-lg px-2 py-2 transition hover:bg-white/5"
      >
        <img
          src="/zzepa.png"
          alt="Zepa UI"
          className="h-8 w-auto max-w-[140px] object-contain"
        />
      </Link>

      <div className="space-y-1">
        {categories.map((category) => {
          const active =
            activeCategory === category

          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`flex w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                active
                  ? "bg-white text-black"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>
    </aside>
  )
}