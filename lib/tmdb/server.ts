import { PEACOCK_NETWORK, PEACOCK_PROVIDER_IDS } from "@/lib/tmdb/discover"

const TMDB_API_BASE = "https://api.themoviedb.org/3"
const POSTER_COUNT = 11 * 10

export function getTmdbApiKey() {
  return (
    process.env.TMDB_API_KEY ??
    process.env.NEXT_PUBLIC_TMDB_API_KEY ??
    ""
  )
}

export function getTmdbAccessToken() {
  return process.env.TMDB_ACCESS_TOKEN ?? ""
}

function getTmdbAuth() {
  const accessToken = getTmdbAccessToken()
  const apiKey = getTmdbApiKey()

  if (accessToken) {
    return {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: "application/json",
      },
    }
  }

  if (apiKey) {
    return { apiKey }
  }

  return null
}

async function tmdbFetch(path: string, revalidate = 60 * 60) {
  const auth = getTmdbAuth()
  if (!auth) {
    throw new Error("Missing TMDB credentials")
  }

  const url = new URL(`${TMDB_API_BASE}${path}`)
  if ("apiKey" in auth && auth.apiKey) {
    url.searchParams.set("api_key", auth.apiKey)
  }

  const response = await fetch(url.toString(), {
    headers: "headers" in auth ? auth.headers : undefined,
    next: { revalidate },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`TMDB request failed (${response.status}): ${body.slice(0, 120)}`)
  }

  return response.json()
}

type TmdbAsset = {
  poster_path: string | null
  name?: string
  title?: string
}

export type TmdbImagesConfig = {
  secure_base_url: string
  poster_sizes: string[]
}

function shuffleList<T>(list: T[]): T[] {
  const shuffled = [...list]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

async function fetchDiscoverPage(type: "tv" | "movie", page: number) {
  const params = new URLSearchParams({
    include_adult: "true",
    sort_by: "popularity.desc",
    language: "en-US",
    page: String(page),
    watch_region: "US",
    with_watch_providers: PEACOCK_PROVIDER_IDS.join("|"),
    with_networks: PEACOCK_NETWORK,
  })

  const data = (await tmdbFetch(`/discover/${type}?${params.toString()}`)) as {
    results?: TmdbAsset[]
  }

  return (data.results ?? []).filter((asset) => asset.poster_path)
}

export async function fetchTmdbConfig(): Promise<{ images: TmdbImagesConfig }> {
  const config = (await tmdbFetch("/configuration", 60 * 60 * 24)) as {
    images: TmdbImagesConfig
  }

  return {
    images: {
      secure_base_url: config.images.secure_base_url.replace(/^http:\/\//i, "https://"),
      poster_sizes: config.images.poster_sizes,
    },
  }
}

export async function fetchTmdbPosterAssets(): Promise<{
  images: TmdbImagesConfig
  results: TmdbAsset[]
}> {
  const [config, ...pages] = await Promise.all([
    fetchTmdbConfig(),
    fetchDiscoverPage("tv", 1),
    fetchDiscoverPage("tv", 2),
    fetchDiscoverPage("tv", 3),
    fetchDiscoverPage("movie", 1),
    fetchDiscoverPage("movie", 2),
    fetchDiscoverPage("movie", 3),
  ])

  const merged = pages.flat()
  const seen = new Set<string>()
  const unique = merged.filter((asset) => {
    if (!asset.poster_path || seen.has(asset.poster_path)) return false
    seen.add(asset.poster_path)
    return true
  })

  const results = shuffleList(unique).slice(0, POSTER_COUNT)

  if (!results.length) {
    throw new Error("No TMDB poster assets returned")
  }

  return { images: config.images, results }
}
