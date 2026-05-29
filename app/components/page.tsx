"use client"

import { useMemo, useState } from "react"

import { registry } from "@/content/registry"

import { Sidebar } from "@/components/sidebar/sidebar"

import { ShowcaseGrid } from "@/components/showcase/showcase-grid"

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] =
    useState("hero-sections")

  const categories = useMemo(() => {
    const cats = [
      ...new Set(
        registry.map(
          (item) => item.category
        )
      ),
    ]
    console.log("categories:", cats)
    return cats
  }, [])

  const filteredItems = registry.filter(
    (item) =>
      item.category === activeCategory
  )

  return (
    <main className="flex min-h-screen bg-black text-white">
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <div className="flex-1 overflow-y-auto p-8">
        <ShowcaseGrid
          items={filteredItems}
        />
      </div>
    </main>
  )
}
