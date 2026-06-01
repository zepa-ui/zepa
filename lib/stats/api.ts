import { NextResponse } from "next/server"

import { getRegistryItem } from "@/lib/registry/helpers"
import {
  getStats,
  incrementStat,
  type ComponentStats,
} from "@/lib/stats/store"

export function statsJson(stats: ComponentStats) {
  return NextResponse.json(stats)
}

export async function assertRegistrySlug(slug: string) {
  if (!getRegistryItem(slug)) {
    return NextResponse.json({ error: "Component not found" }, { status: 404 })
  }
  return null
}

export async function handleGetStats(slug: string) {
  const notFound = await assertRegistrySlug(slug)
  if (notFound) return notFound
  return statsJson(await getStats(slug))
}

export async function handleIncrement(
  slug: string,
  field: keyof ComponentStats
) {
  const notFound = await assertRegistrySlug(slug)
  if (notFound) return notFound
  return statsJson(await incrementStat(slug, field))
}
