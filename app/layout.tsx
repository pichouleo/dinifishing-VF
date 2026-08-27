import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dini Fishing — Guide de pêche en Extremadura, Espagne',
  description: 'Séjours de pêche guidés aux carnassiers en Extremadura, Espagne. Black Bass, Brochet, Sandre. Venez avec votre propre bateau ou float tube.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}