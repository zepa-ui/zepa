import { notFound } from "next/navigation"

import { ComponentDemo } from "@/components/showcase/component-demo"
import { getAllSlugs, getRegistryItem } from "@/lib/registry/helpers"

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
      <ComponentDemo slug={slug} fullscreen showOpenInNewTab={false} />
    </main>
  )
}
