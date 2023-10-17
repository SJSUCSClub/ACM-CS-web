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
    <div className="navbar bg-[#f5f8f1] px-24 sm:px-6 py-3 sm:py-2 sticky flex justify-center w-screen top-0 left-0 right-0 z-10 shadow-md">
      {/* <div className="max-w-[1440px] flex justify-center gap-[1]"> */}
      <a href="/" className='mr-auto'>
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
      {/* </div> */}
    </div>
  )
}

export default Navbar