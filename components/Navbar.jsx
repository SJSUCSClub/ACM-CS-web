"use client"
import React from 'react'
import Logo from '@/public/icons/logo.png'
import Image from 'next/image'
import ApplyButton from './ApplyButton'

const Navbar = () => {
  return (
    <div className="bg-[#f5f8f1] md:px-16 md:py-3 sm:px-8 sm:py-2 flex items-center fixed top-0 left-0 right-0 z-10 drop-shadow-md">
      <Image src={Logo} alt="Logo" width={100} height={100} className="mr-auto sm:w-12 sm:h-auto" />
      <ApplyButton />
    </div>
  )
}

export default Navbar