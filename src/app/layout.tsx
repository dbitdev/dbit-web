import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dbit | Bienvenido',
  description: 'Dbit Inc. innovación tecnológica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es_MX">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
