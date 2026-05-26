"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

const GITHUB_REPO = "magicuidesign/magicui"
const GITHUB_URL = `https://github.com/${GITHUB_REPO}`

const formatCompactCount = (value: number) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`
  }

  return value.toLocaleString()
}

async function getStarsCount() {
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`)
    if (!response.ok) return 0

    const json: unknown = await response.json()
    if (
      typeof json !== "object" ||
      json === null ||
      !("stargazers_count" in json) ||
      typeof json.stargazers_count !== "number"
    ) {
      return 0
    }

    return Number.isFinite(json.stargazers_count) ? json.stargazers_count : 0
  } catch {
    return 0
  }
}

export function GitHubLink({ className }: { className?: string }) {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    let mounted = true

    getStarsCount().then((count) => {
      if (mounted) setStars(count)
    })

    return () => {
      mounted = false
    }
  }, [])

  const starsLabel = useMemo(() => {
    if (stars === null) return null
    return {
      full: stars.toLocaleString(),
      compact: formatCompactCount(stars),
    }
  }, [stars])

  return (
    <Button asChild size="sm" variant="ghost" className="h-8 gap-2 shadow-none">
      <Link href={GITHUB_URL} target="_blank" rel="noreferrer" className={className} title="View on GitHub">
        <GitHubIcon className="size-4" />
        {starsLabel ? (
          <span className="text-muted-foreground w-8 text-xs tabular-nums">
            <span className="hidden sm:inline">{starsLabel.full}</span>
            <span className="sm:hidden">{starsLabel.compact}</span>
          </span>
        ) : (
          <Skeleton className="h-4 w-8" />
        )}
      </Link>
    </Button>
  )
}
