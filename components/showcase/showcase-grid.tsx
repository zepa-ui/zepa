"use client"

import { ComponentPreview } from "./component-preview"

interface ComponentItem {
  slug: string
  title: string
  preview?: string
}

interface ShowcaseGridProps {
  items: ComponentItem[]
}

export function ShowcaseGrid({
  items,
}: ShowcaseGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items
        .filter((item) => item.preview)
        .map((item) => (
          <ComponentPreview
            key={item.slug}
            slug={item.slug}
            title={item.title}
            preview={item.preview!}
          />
        ))}
    </div>
  )
}