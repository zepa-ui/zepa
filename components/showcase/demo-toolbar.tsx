"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ExternalLink, Moon, RotateCw, Sun } from "lucide-react"

import { cn } from "@/lib/utils"

export type DemoTheme = "light" | "dark"

interface DemoToolbarProps {
  slug: string
  theme: DemoTheme
  onThemeChange: (theme: DemoTheme) => void
  onRefresh: () => void
  showOpenInNewTab?: boolean
  className?: string
}

function ToolbarButton({
  children,
  onClick,
  label,
  href,
  target,
}: {
  children: ReactNode
  onClick?: () => void
  label: string
  href?: string
  target?: string
}) {
  const className =
    "flex size-8 items-center justify-center rounded-md text-white/80 transition hover:bg-white/10 hover:text-white"

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        aria-label={label}
        title={label}
        className={className}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={className}
    >
      {children}
    </button>
  )
}

export function DemoToolbar({
  slug,
  theme,
  onThemeChange,
  onRefresh,
  showOpenInNewTab = true,
  className,
}: DemoToolbarProps) {
  return (
    <div
      className={cn(
        "absolute left-3 top-3 z-50 flex items-center gap-0.5 rounded-lg border border-white/10 bg-black p-1 shadow-lg",
        className
      )}
    >
      {showOpenInNewTab ? (
        <ToolbarButton
          href={`/components/${slug}/preview`}
          target="_blank"
          label="Open in new tab"
        >
          <ExternalLink className="size-4" />
        </ToolbarButton>
      ) : null}

      <ToolbarButton
        label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        onClick={() =>
          onThemeChange(theme === "dark" ? "light" : "dark")
        }
      >
        {theme === "dark" ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )}
      </ToolbarButton>

      <ToolbarButton label="Refresh demo" onClick={onRefresh}>
        <RotateCw className="size-4" />
      </ToolbarButton>
    </div>
  )
}
