import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adeniyi Bella Portfolio',
  description: "Professional portfolio of Adeniyi Bella, IT Specialist",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
