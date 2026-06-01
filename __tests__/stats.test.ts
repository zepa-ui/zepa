import { describe, expect, it } from "vitest"

import { getMetaStats } from "@/lib/stats/meta-seeds"
import { getStats } from "@/lib/stats/store"
import { ZERO_STATS } from "@/lib/stats/types"

describe("component stats", () => {
  it("ZERO_STATS is all zeros", () => {
    expect(ZERO_STATS).toEqual({ views: 0, likes: 0, installs: 0 })
  })

  it("returns zeros for an unknown component slug", async () => {
    await expect(getStats("non-existent-slug")).resolves.toEqual({
      views: 0,
      likes: 0,
      installs: 0,
    })
  })

  it("uses fake launch seeds from meta.ts", () => {
    expect(getMetaStats("glsl-hills-hero")).toEqual({
      views: 44231,
      likes: 312,
      installs: 1240,
    })
  })

  it("getStats returns at least meta seeds for a registered component", async () => {
    const stats = await getStats("glsl-hills-hero")
    expect(stats.views).toBeGreaterThanOrEqual(44231)
    expect(stats.likes).toBeGreaterThanOrEqual(312)
    expect(stats.installs).toBeGreaterThanOrEqual(1240)
  })
})
