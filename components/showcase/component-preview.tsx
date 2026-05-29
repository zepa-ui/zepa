"use client"

interface ComponentPreviewProps {
  title: string
  preview: string
  onClick?: () => void
}

export function ComponentPreview({
  title,
  preview,
  onClick,
}: ComponentPreviewProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/10"
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
        <div className="w-fit rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
          {title}
        </div>
      </div>
    </button>
  )
}