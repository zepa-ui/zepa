"use client"

import Link from "next/link"

interface ComponentPreviewProps {
  slug: string
  title: string
  preview: string
}

export function ComponentPreview({
  slug,
  title,
  preview,
}: ComponentPreviewProps) {
  return (
    <Link
      href={`/components/${slug}`}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/10"
    >
      <div className="aspect-video overflow-hidden bg-black">
        <video
          src={preview}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/40" />

      <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition duration-300 group-hover:translate-y-0">
        <div className="w-fit rounded-md bg-white px-2.5 py-1 text-xs font-medium text-black">
          {title}
        </div>
      </div>
    </Link>
  )
}