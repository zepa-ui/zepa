export type ComponentStats = {
  views: number
  likes: number
  installs: number
}

/** Default stats for every component before any tracked events. */
export const ZERO_STATS: ComponentStats = {
  views: 0,
  likes: 0,
  installs: 0,
}
