import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Adeniyi Bella Portfolio",
  description: "Professionelles Portfolio von Adeniyi Bella, Fachinformatiker",
}

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
