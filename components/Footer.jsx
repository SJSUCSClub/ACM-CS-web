import React from 'react'
import logo from "@/public/icons/logo.png";
import SocialIcon from './SocialIcon';
import Instagram from "@/public/icons/instagram.svg";
import LinkedIn from "@/public/icons/linkedin.svg";
import LinkToButton from './LinkToButton';
import Image from 'next/image'

const Footer = () => {
  const social = [
    {
      link: "@sjsuacm",
      url: "https://www.instagram.com/sjsuacm/",
      icon: Instagram,
    },
    {
      link: "SJSU Computer Science Club",
      url: "https://www.linkedin.com/company/sjsu-computer-science-club/",
      icon: LinkedIn,
    },
  ]
  return (
    <div className="w-full bg-[#263238] text-white py-8 space-y-6 flex flex-col gap-4 items-center justify-center">
      <div className="flex sm:flex-col items-center justify-center gap-24 sm:gap-12">
        <div className="md:text-left flex flex-col sm:justify-center sm:items-center gap-4">
          <div >
            <Image src={logo} alt="logo" width={150} height={150} />
          </div>
          <p className="text-sm ml-2 font-semibold">Room MQH 227, San Jose State University<br /> 1 Washington Sq, San Jose, CA 95192</p>
          <div className="mt-6 ml-2">
            <LinkToButton url="mailto:officialcsclub.sjsu@gmail.com" text="Contact Us" color="from-[#ec6c04] via-[#f69904] to-[#fcc304]" />
          </div>
        </div>
        <div className="text-left flex flex-col sm:justify-center sm:items-center">
          <p className="text-2xl font-black mb-4 ">Connect With Us</p>
          {social.map((social) => (
            <SocialIcon link={social.link} url={social.url} icon={social.icon} />
          ))}
        </div>

        <LinkToButton url="https://discord.gg/yHky9bXRdE" text="Join our Discord" color="from-[#bcbcfc] via-[#4464e4] to-[#7c54ac]" />
      </div>


      <p>ACM-CS at SJSU &copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer