import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dini Fishing',
  description: 'Séjours de pêche guidés en Extremadura, Espagne',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}