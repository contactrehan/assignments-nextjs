import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
import "./style.css"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project-2',
  description: 'Generated by nextjs-14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  )
}
