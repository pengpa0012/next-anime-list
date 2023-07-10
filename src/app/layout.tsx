import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Anime List',
  description: 'Anime List Website using Jikan API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://www.youtube.com/player_api" defer></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
