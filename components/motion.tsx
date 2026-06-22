"use client"

import dynamic from "next/dynamic"

export const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
)

export const MotionP = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.p),
  { ssr: false }
)

export const MotionBlockquote = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.blockquote),
  { ssr: false }
)

export const MotionButton = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.button),
  { ssr: false }
)

export const MotionSpan = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.span),
  { ssr: false }
)

export { AnimatePresence } from "framer-motion"
