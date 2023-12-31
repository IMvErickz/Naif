import { Header } from '@/components/Header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer/Footer'

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
      <head>
        <link rel="icon" href="/Logo.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
