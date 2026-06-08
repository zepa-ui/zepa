import { NextResponse } from "next/server"

import {
  fetchTmdbPosterAssets,
  getTmdbAccessToken,
  getTmdbApiKey,
} from "@/lib/tmdb/server"

export async function GET() {
  if (!getTmdbApiKey() && !getTmdbAccessToken()) {
    return NextResponse.json(
      {
        error:
          "Missing TMDB credentials. Set TMDB_ACCESS_TOKEN or TMDB_API_KEY in .env.local",
      },
      { status: 500 }
    )
  }

  try {
    const payload = await fetchTmdbPosterAssets()
    return NextResponse.json(payload)
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch TMDB posters"

    return NextResponse.json({ error: message }, { status: 502 })
  }
}
