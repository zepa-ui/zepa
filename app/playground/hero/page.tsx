import { FullscreenDemo } from "@/components/showcase/fullscreen-demo"
import { getMetaStats } from "@/lib/stats/meta-seeds"

export default function HeroPlaygroundPage() {
  return (
    <main className="min-h-screen bg-black">
      <FullscreenDemo
        slug="posterscroll-hero"
        initialStats={getMetaStats("posterscroll-hero")}
      />
    </main>
  )
}
