"use client"

import { motion } from "framer-motion"
import { useSyncExternalStore } from "react"

const LEFT_LABELS = ["Train", "Package", "Version"]
const RIGHT_LABELS = ["Route", "Deploy", "Observe"]

const PILL_WIDTH = 128
const PILL_HEIGHT = 38
const PILL_RX = 19
const PILL_FONT_SIZE = 14
const PILL_SPACING = 72
const PILL_START_Y = 24
const LEFT_PILL_X = 36
const RIGHT_PILL_X = 636
const CENTER_X = 400
const CENTER_Y = 108

function pillCenterY(index: number) {
  return PILL_START_Y + index * PILL_SPACING + PILL_HEIGHT / 2
}

function PillLabel({
  label,
  x,
  y,
  delay,
}: {
  label: string
  x: number
  y: number
  delay: number
}) {
  return (
    <motion.g
      initial={{ opacity: 0, x: x > CENTER_X ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <rect
        x={x}
        y={y}
        width={PILL_WIDTH}
        height={PILL_HEIGHT}
        rx={PILL_RX}
        fill="none"
        stroke="var(--foreground)"
        strokeWidth={1.5}
      />
      <text
        x={x + PILL_WIDTH / 2}
        y={y + PILL_HEIGHT / 2 + 4}
        textAnchor="middle"
        fill="var(--foreground)"
        fontSize={PILL_FONT_SIZE}
        fontFamily="var(--font-mono), monospace"
        fontWeight={500}
        letterSpacing="0.05em"
      >
        {label}
      </text>
    </motion.g>
  )
}

export function WorkflowDiagram() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  if (!mounted) {
    return <div className="h-[240px] w-full" />
  }

  return (
    <div className="relative w-full max-w-[800px] mx-auto">
      <svg
        viewBox="0 0 800 230"
        className="w-full h-auto"
        role="img"
        aria-label="Workflow diagram showing connected deployment stages: Train, Package, Version, Route, Deploy, Observe"
      >
        {/* Left lines from center to left labels */}
        {LEFT_LABELS.map((_, i) => {
          const pillX = LEFT_PILL_X
          return (
            <motion.line
              key={`left-line-${i}`}
              x1={CENTER_X - 40}
              y1={CENTER_Y}
              x2={pillX + PILL_WIDTH}
              y2={pillCenterY(i)}
              stroke="var(--border)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            />
          )
        })}

        {/* Right lines from center to right labels */}
        {RIGHT_LABELS.map((_, i) => {
          const pillX = RIGHT_PILL_X
          return (
            <motion.line
              key={`right-line-${i}`}
              x1={CENTER_X + 40}
              y1={CENTER_Y}
              x2={pillX}
              y2={pillCenterY(i)}
              stroke="var(--border)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            />
          )
        })}

        {/* Data packets flowing along lines */}
        {LEFT_LABELS.map((_, i) => {
          const pillX = LEFT_PILL_X
          const centerY = pillCenterY(i)
          return (
            <motion.circle
              key={`left-packet-${i}`}
              r={3.5}
              fill="#ea580c"
              initial={{ cx: pillX + PILL_WIDTH, cy: centerY }}
              animate={{
                cx: [pillX + PILL_WIDTH, CENTER_X - 40],
                cy: [centerY, CENTER_Y],
              }}
              transition={{
                duration: 1.8,
                delay: 0.8 + i * 0.6,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear",
              }}
            />
          )
        })}

        {RIGHT_LABELS.map((_, i) => {
          const pillX = RIGHT_PILL_X
          const centerY = pillCenterY(i)
          return (
            <motion.circle
              key={`right-packet-${i}`}
              r={3.5}
              fill="#ea580c"
              initial={{ cx: CENTER_X + 40, cy: CENTER_Y }}
              animate={{
                cx: [CENTER_X + 40, pillX],
                cy: [CENTER_Y, centerY],
              }}
              transition={{
                duration: 1.8,
                delay: 1.2 + i * 0.6,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear",
              }}
            />
          )
        })}

        {/* Left pill labels */}
        {LEFT_LABELS.map((label, i) => (
          <PillLabel
            key={`left-${label}`}
            label={label}
            x={LEFT_PILL_X}
            y={PILL_START_Y + i * PILL_SPACING}
            delay={0.1 + i * 0.1}
          />
        ))}

        {/* Right pill labels */}
        {RIGHT_LABELS.map((label, i) => (
          <PillLabel
            key={`right-${label}`}
            label={label}
            x={RIGHT_PILL_X}
            y={PILL_START_Y + i * PILL_SPACING}
            delay={0.1 + i * 0.1}
          />
        ))}

        {/* Center logo square */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <rect
            x={CENTER_X - 36}
            y={CENTER_Y - 36}
            width={72}
            height={72}
            fill="var(--muted)"
            stroke="var(--border)"
            strokeWidth={1.5}
          />
          {/* Abstract cross/flower logo shape */}
          <line x1={CENTER_X} y1={CENTER_Y - 18} x2={CENTER_X} y2={CENTER_Y + 18} stroke="var(--foreground)" strokeWidth={3} />
          <line x1={CENTER_X - 18} y1={CENTER_Y} x2={CENTER_X + 18} y2={CENTER_Y} stroke="var(--foreground)" strokeWidth={3} />
          <line x1={CENTER_X - 12} y1={CENTER_Y - 12} x2={CENTER_X + 12} y2={CENTER_Y + 12} stroke="var(--foreground)" strokeWidth={2} />
          <line x1={CENTER_X + 12} y1={CENTER_Y - 12} x2={CENTER_X - 12} y2={CENTER_Y + 12} stroke="var(--foreground)" strokeWidth={2} />
          {/* Pulsing ring */}
          <circle cx={CENTER_X} cy={CENTER_Y} r={30} fill="none" stroke="#ea580c" strokeWidth={1}>
            <animate
              attributeName="r"
              values="30;34;30"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0.2;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </motion.g>
      </svg>
    </div>
  )
}
