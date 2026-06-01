import { existsSync } from "fs"
import { mkdir, readFile, writeFile } from "fs/promises"
import path from "path"

import { getMetaStats } from "@/lib/stats/meta-seeds"
import type { ComponentStats } from "@/lib/stats/types"

export type { ComponentStats } from "@/lib/stats/types"

const DATA_DIR = path.join(process.cwd(), "data")
const STATS_FILE = path.join(DATA_DIR, "component-stats.json")

declare global {
  var __zepaComponentStats: Record<string, ComponentStats> | undefined
}

function getMemoryStore() {
  if (!globalThis.__zepaComponentStats) {
    globalThis.__zepaComponentStats = {}
  }
  return globalThis.__zepaComponentStats
}

async function readFileStore(): Promise<Record<string, ComponentStats>> {
  try {
    if (!existsSync(STATS_FILE)) {
      return {}
    }
    const raw = await readFile(STATS_FILE, "utf-8")
    return JSON.parse(raw) as Record<string, ComponentStats>
  } catch {
    return {}
  }
}

async function writeFileStore(data: Record<string, ComponentStats>) {
  try {
    await mkdir(DATA_DIR, { recursive: true })
    await writeFile(STATS_FILE, JSON.stringify(data, null, 2))
  } catch {
    // Ephemeral filesystem (e.g. serverless) — memory store still holds counts.
  }
}

/** Merge persisted counts with meta seeds (never show below launch numbers). */
function mergeWithMetaSeed(
  slug: string,
  stored: ComponentStats | undefined
): ComponentStats {
  const seed = getMetaStats(slug)
  if (!stored) {
    return seed
  }

  return {
    views: Math.max(stored.views, seed.views),
    likes: Math.max(stored.likes, seed.likes),
    installs: Math.max(stored.installs, seed.installs),
  }
}

export async function getStats(slug: string): Promise<ComponentStats> {
  const memory = getMemoryStore()
  if (memory[slug]) {
    return mergeWithMetaSeed(slug, memory[slug])
  }

  const file = await readFileStore()
  const merged = mergeWithMetaSeed(slug, file[slug])
  memory[slug] = merged
  return merged
}

export async function incrementStat(
  slug: string,
  field: keyof ComponentStats,
  amount = 1
): Promise<ComponentStats> {
  const current = await getStats(slug)
  const next: ComponentStats = {
    ...current,
    [field]: current[field] + amount,
  }

  const memory = getMemoryStore()
  memory[slug] = next

  const file = await readFileStore()
  file[slug] = next
  await writeFileStore(file)

  return next
}
