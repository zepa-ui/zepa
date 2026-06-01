import { notFound } from "next/navigation"

import { FullscreenDemo } from "@/components/showcase/fullscreen-demo"
import { getAllSlugs, getRegistryItem } from "@/lib/registry/helpers"
import { getMetaStats } from "@/lib/stats/meta-seeds"

interface ComponentPreviewPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function ComponentPreviewPage({
  params,
}: ComponentPreviewPageProps) {
  const { slug } = await params
  const item = getRegistryItem(slug)

  if (!item) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      <FullscreenDemo slug={slug} initialStats={getMetaStats(slug)} />
    </main>
  )
}
