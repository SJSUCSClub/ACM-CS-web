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
import axios from 'axios'

const Navbar = ({ scroll, path }) => {

  const { status } = useSession()
  return (
    <div className={`navbar  ${scroll ? 'bg-[#f5f8f1] shadow-md' : 'bg-transparent'}  px-24 sm:px-6 py-3 sm:py-2 sticky flex justify-center w-[100vw] z-10 top-0 left-0 right-0`}>
      <a href="/" className='mr-auto'>
        <Image src={Logo} alt="Logo" width={100} height={100} className="sm:w-12 sm:h-auto" />
      </a>
      <div className="flex gap-4 items-center justify-center">
        <LinkCard path="/aboutus" pathName="ABOUT US" scroll={scroll} />
        <LinkCard path="/events" pathName="EVENTS" scroll={scroll} />
        <LinkCard path="/workshops" pathName="WORKSHOPS" scroll={scroll} />
        <LinkCard path="/blog" pathName="BLOGS" scroll={scroll} />
        <h1>{path}</h1>
        {status === 'authenticated' ? (
          <SignOutBtn />
        ) : (
          <div className="flex gap-4 items-center justify-center">
            <ApplyBtn scroll={scroll} />
            <GoogleBtn />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar