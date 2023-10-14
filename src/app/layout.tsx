import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kyoulee Blog',
  description: 'Blog',
}

export default function RootLayout(
  { children, }:
    { children: React.ReactNode }
) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Nav />
      {children}
    </body>
    </html>
  )
}
