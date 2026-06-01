import { getRegistryItem } from "@/lib/registry/helpers"

import { ZERO_STATS, type ComponentStats } from "@/lib/stats/types"

/** Launch / display seeds from each component's meta.ts (fake stats until a real DB). */
export function getMetaStats(slug: string): ComponentStats {
  const item = getRegistryItem(slug)
  if (!item) {
    return { ...ZERO_STATS }
  }

  return {
    views: item.views ?? 0,
    likes: item.likes ?? 0,
    installs: item.installs ?? 0,
  }
}
