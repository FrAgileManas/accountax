import "./globals.css";
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Accountax - Professional Accounting Made Simple',
  description: 'Transform your business finances with expert bookkeeping, tax preparation, and financial consulting services. Focus on growth while we handle the numbers.',
  keywords: 'accounting, bookkeeping, tax preparation, financial consulting, business services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}