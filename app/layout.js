import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Logo from '@/public/icons/logo.png'
const inter = Inter({ subsets: ['latin'] })
import { NextAuthProvider } from './Provider'

export const metadata = {
  title: 'ACM @ SJSU',
  description: 'ACM Chapter at San Jose State University',
  icon: { Logo },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="@/public/icons/logo.png" />
      </head>
      <body className={`${inter.className} flex flex-col justify-center items-center bg-[#f5f8f1] gap-12`}>
        <NextAuthProvider>
          <Navbar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>

    </html>
  )
}
