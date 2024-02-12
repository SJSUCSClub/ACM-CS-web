"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'
import Logo from '@/public/icons/logo.png'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })
import { NextAuthProvider } from './Provider'

export const metadata = {
  title: 'ACM @ SJSU',
  description: 'ACM Chapter at San Jose State University',
  icon: { Logo },
}

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeNavBar = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener("scroll", changeNavBar)

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="@/public/icons/logo.png" />
      </head>
      <body className={`${poppins.className} flex flex-col justify-center items-center bg-[#f5f8f1] overflow-x-hidden`}>
        <NextAuthProvider>
          <Navbar scroll={isScrolled} />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>

    </html>
  )
}

{/* <div className="bg-custom-bg bg-cover h-screen bg-center bg-no-repeat w-full"> */ }
