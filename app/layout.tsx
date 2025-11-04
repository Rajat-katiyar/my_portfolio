import type { Metadata } from 'next'
import '../src/style.css'

export const metadata: Metadata = {
  title: 'Portfolio - Rajat Katiyar',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

