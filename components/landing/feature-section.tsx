"use client"

const FEATURE_VIDEOS = [
  { src: "/7.mp4", label: "Hero layouts" },
  { src: "/6.mp4", label: "Motion systems" },
  { src: "/5.mp4", label: "3D & WebGL" },
] as const

export function FeatureSection() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {FEATURE_VIDEOS.map((item) => (
          <article
            key={item.src}
            className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50"
          >
            <div className="aspect-[5/4] w-full overflow-hidden bg-zinc-950">
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="px-3 py-2 text-center text-xs font-medium tracking-wide text-zinc-400">
              {item.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
