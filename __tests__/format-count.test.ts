import { describe, expect, it } from "vitest"

import { formatCount } from "@/lib/format-count"

describe("formatCount", () => {
  it("formats large numbers in compact notation", () => {
    expect(formatCount(44231)).toBe("44.2K")
    expect(formatCount(1250)).toBe("1.3K")
    expect(formatCount(1320000)).toBe("1.3M")
  })
})
