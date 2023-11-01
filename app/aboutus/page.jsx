"use client"

import React from 'react';
import Image from 'next/image';
import ScrollDownArrow from '@/components/Buttons/ScrollDownButton';

import csimg from "@/public/icons/csimg.png";
import network from "@/public/icons/network.png";
import media from "@/public/icons/media.png";
import mentor from "@/public/icons/mentor.png";
import acmproj from "@/public/icons/acmproj.png";



export default function AboutUs() {
  return (
    <>
      <div className="py-4 relative">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-10">
            What is ACM at SJSU?
          </h1>
        </div>
        <div className="container mx-auto flex md:flex-wrap items-center justify-center mb-10">
          <div className="max-w-[800px] p-6 rounded-lg md:flex-none"> 
            <Image src={csimg} alt="Description of the image" width={300} height={250} className="rounded-md" />
          </div>
          <div className="max-w-[600px] p-6 rounded-lg"> 
            <p className="text-lg text-gray-600 mb-2"> 
              The ACM Club at San Jose State University (SJSU) is the premier student chapter of the Association for Computing Machinery (ACM) in the heart of Silicon Valley. At ACM SJSU, we are dedicated to fostering a vibrant community of technology enthusiasts and innovators.
            </p>
            <p className="text-lg text-gray-600 "> 
              Our inclusive club welcomes students from all backgrounds and skill levels, whether you're a seasoned coder or just starting your journey in the world of computing. We believe in the power of collaboration and the endless possibilities offered by computer science.
            </p>
          </div>
        </div>

        <div className="flex justify-center ">
          <ScrollDownArrow />
        </div>
      </div>

      <div className="container mx-auto max-w-screen-md text-center mt-32">
      <h1 className="text-4xl font-bold pb-20">
         Thinking About Getting Involved?
      </h1>

    <div className="flex flex-wrap items-center justify-center">

    <div className="pb-40">
        <div className="p-4 rounded-lg flex items-center pb-0 md:flex-col md:items-center">
          <div className="max-w-[500px] w-4/5 text-left">
            <h1 className="text-2xl font-bold max-w-[600px]">Become a Member</h1>
            <p className="text-lg text-gray-600 mt-4 pr-10 pb-5">
            Join ACM SJSU and elevate your tech journey. Access valuable resources like mock interviews for interview prep, thrilling hackathons, and coding competitions. Connect with industry leaders like <strong>Apple</strong>, <strong>Tesla</strong>, and <strong>Kohl's</strong> for exclusive networking opportunities.
            </p>
          </div>
          <Image src={network} alt="CS Image" width={350} height={300} className="rounded-md mt-4 md:mt-0" />
        </div>
      </div>


      <div className=' pb-40'>
        <div className="p-4 rounded-lg flex items-center pb-0 md:flex-col md:items-center">
          <div className="max-w-[500px] w-4/5 text-left">
            <h1 className="text-2xl font-bold max-w-[600px]">Stay Connected on Social Media</h1>
            <p className="text-lg text-gray-600 mt-4 pr-10 pb-5">
            Stay in the loop and connected with our community through our various social media channels. Follow us on platforms like Instagram, Twitter, Facebook, and LinkedIn to stay updated on our latest events, projects, and initiatives.
            </p>
          </div>
          <Image src={media} alt="CS Image" width={350} height={300} className="rounded-md mt-4 md:mt-0" />
        </div>
      </div>


      <div className='pb-40'>
        <div className="p-4 rounded-lg flex items-center pb-0 md:flex-col md:items-center">
          <div className="max-w-[500px] w-4/5 text-left">
            <h1 className="text-2xl font-bold max-w-[600px]">Partake in Our ACM Projects!</h1>
            <p className="text-lg text-gray-600 mt-4 pr-10">
            Believe it or not, this very website was created by students, just like you! Our projects cover a wide range of topics, from web development to hardware engineering, bot development and much more!
            </p>
            <p className="text-lg text-gray-600 mt-4 pr-10 pb-5">
            As a member, you'll have the chance to work on exciting and real-world projects that will enhance your skills and make a positive impact on our community.
            </p>
          </div>
          <Image src={acmproj} alt="CS Image" width={350} height={300} className="rounded-md mt-4 md:mt-0" />
        </div>
      </div>




      <div className="p-4 rounded-lg flex items-center pb-0 md:flex-col md:items-center">
        <div className="max-w-[500px] w-4/5 text-left">
          <h1 className="text-2xl font-bold max-w-[600px]">Join Our Mentor/Mentee Program</h1>
          <p className="text-lg text-gray-600 mt-4 pr-10 ">
          Join our community and connect with experienced mentors who are eager to share their knowledge and insights. As a mentee, you'll gain valuable guidance to navigate your academic and career journey successfully. 
          </p>
          <p className="text-lg text-gray-600 mt-4 pr-10 pb-5">
          If you're an experienced professional looking to give back and make a meaningful impact, consider becoming a mentor and providing guidance to the next generation of tech enthusiasts.
          </p>
        </div>
        <Image src={mentor} alt="CS Image" width={350} height={300} className="rounded-md mt-4 md:mt-0" />
      </div>



    </div>
  </div>
    </>
  );
}
