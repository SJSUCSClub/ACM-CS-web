"use client"
import React from 'react'
import Logo from '@/public/icons/logo.png'
import Image from 'next/image'
import ApplyBtn from '../Buttons/ApplyBtn'
import GoogleBtn from '../Buttons/GoogleBtn'
import { useSession, SignOut } from 'next-auth/react'
import SignOutBtn from '../Buttons/SignOutBtn'
import Link from 'next/link'
import LinkCard from './LinkCard'

const Navbar = () => {
  const { status } = useSession()
  return (
    <div className="navbar bg-[#f5f8f1] px-16 py-3 sm:px-8 sm:py-2 flex justify-center sticky w-screen top-0 left-0 right-0 z-10 shadow-md">
      <a href="/" className='mr-auto '>
        <Image src={Logo} alt="Logo" width={100} height={100} className="sm:w-12 sm:h-auto" />
      </a>


      {status === 'authenticated' ? (
        <SignOutBtn />
      ) : (
        <div className="flex gap-4 items-center justify-center">
          <LinkCard path="/aboutus" pathName="ABOUT US" />
          <LinkCard path="/event" pathName="EVENTS" />
          <LinkCard path="/workshop" pathName="WORKSHOPS" />
          <LinkCard path="/blog" pathName="BLOGS" />
          <ApplyBtn />
          <GoogleBtn />
        </div>
      )}
    </div>
  )
}

export default Navbar