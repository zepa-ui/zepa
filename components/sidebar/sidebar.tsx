"use client"

import { SidebarPanel } from "./sidebar-panel"

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
    <aside className="w-sidebar hidden shrink-0 border-r border-white/10 bg-zinc-900/40 p-4 lg:block">
      <SidebarPanel
        categories={categories}
        activeCategory={activeCategory}
        onSelect={onSelect}
      />
    </aside>
  )
}
