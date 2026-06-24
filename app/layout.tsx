import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dini Fishing',
  description: 'Séjours de pêche guidés en Extremadura, Espagne',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
