import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Solitude',
  description: 'The House of Solitude | A Wynncraft Guild',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="bumblebee">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
