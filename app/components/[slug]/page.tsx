import { notFound } from "next/navigation"

import { ComponentDetail } from "@/components/showcase/component-detail"
import { getComponentCode } from "@/lib/registry/code"
import { highlightCodeFiles } from "@/lib/registry/highlight"
import { getAllSlugs, getRegistryItem } from "@/lib/registry/helpers"

interface ComponentDetailPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function ComponentDetailPage({
  params,
}: ComponentDetailPageProps) {
  const { slug } = await params
  const item = getRegistryItem(slug)

  if (!item) {
    notFound()
  }

  const rawCode = await getComponentCode(slug)
  const code = await highlightCodeFiles(rawCode)

  return (
    <ComponentDetail
      slug={slug}
      title={item.title}
      description={item.description}
      creator={item.creator}
      dependencies={[...item.dependencies]}
      code={code}
    />
  )
}
