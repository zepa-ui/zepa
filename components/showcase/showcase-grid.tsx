"use client"

import { ComponentPreview } from "./component-preview"

interface ShowcaseGridProps {
  items: any[]
}

export function ShowcaseGrid({
  items,
}: ShowcaseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-">
      {items.map((item) => (
        <ComponentPreview
          key={item.slug}
          title={item.title}
          preview={item.preview}
        />
      ))}
    </div>
  )
}