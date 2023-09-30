import React from 'react'
import LinkToButton from './LinkToButton'
import Events from './Events'
import Image from 'next/image'
import Background from '@/public/photos/background.jpg'

const Hero = () => {
  return (
    <div className="xl:h-[80vh] flex flex-col gap-12 sm:gap-2 justify-center items-center max-w-[1440px]">
      <div className="sm:h-[100%] flex flex-col gap-12 justify-center sm:text-center sm:gap-6">
        <div className="flex flex-col gap-6 sm:justify-center sm:items-center">
          <h1 className="text-5xl sm:text-3xl font-black drop-shadow-lg">
            <span className="text-[#196096]">ACM-<span className="text-[#eabc4e]">CS</span></span> @ <span className="text-[#eabc4e]">SJSU</span>
          </h1>
          <h2 className="text-2xl font-bold">We are the largest Computer Science organization at San José State University</h2>
        </div>
        <div className="flex flex-col gap-6 sm:gap-8 sm:justify-center sm:items-center">
          <p className="text-lg">Join us for technical workshops, interview prep, and more fun activities</p>
          <LinkToButton url="https://discord.gg/yHky9bXRdE" text="Join our Discord" />
        </div>
      </div>
      <Events />
    </div>
  )
}

export default Hero