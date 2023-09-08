import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ACM @ SJSU',
  description: 'ACM Chapter at San Jose State University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} md:text-lg `}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
