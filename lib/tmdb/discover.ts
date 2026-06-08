export const PEACOCK_PROVIDER_IDS = [386, 387] as const
export const PEACOCK_NETWORK = "3353"
export const TMDB_API_BASE = "https://api.themoviedb.org/3"

export function buildDiscoverUrl(
  type: "tv" | "movie",
  page: number,
  apiKey: string
) {
  const params = new URLSearchParams({
    api_key: apiKey,
    include_adult: "true",
    sort_by: "popularity.desc",
    language: "en-US",
    page: String(page),
    watch_region: "US",
    with_watch_providers: PEACOCK_PROVIDER_IDS.join("|"),
    with_networks: PEACOCK_NETWORK,
  })

  return `${TMDB_API_BASE}/discover/${type}?${params.toString()}`
}
