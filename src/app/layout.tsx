import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instituto Naif',
  description: 'Instituto Naif',
  icons: '/public/Logo.svg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
        <link rel="icon" href="/Logo.svg" />
      </header>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
