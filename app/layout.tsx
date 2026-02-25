import type { Metadata, Viewport } from 'next'
import { Orbitron, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ELITERA 2026 | RVS College of Engineering and Technology',
  description: 'ELITERA 2026 - National Level Technical Symposium organized by the Department of Information Technology, RVS College of Engineering and Technology, Coimbatore.',
  keywords: ['ELITERA', 'symposium', 'RVS College', 'technical events', 'Coimbatore', 'IT department'],
}

export const viewport: Viewport = {
  themeColor: '#050a14',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
