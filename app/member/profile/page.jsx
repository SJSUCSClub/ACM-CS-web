"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image'
  
import LinkedIn from '@/public/icons/linkedin.png';
import Discord from '@/public/icons/Discord.svg';
import Email from '@/public/icons/email.svg';
import Instagram from '@/public/icons/instagram.svg';


const MemberProfile = () => {
  const [userData, setUserData] = useState(0);
  useEffect(() => {
    setUserData({name:"Bob Ross",discord:"https://discord.com/",instagram:"https://www.instagram.com/",linkedin:"https://www.linkedin.com/",github:"https://github.com/",email:"anemail@gmail.com",major:"Computer Science",studentType:"Undergraduate",role:"User",events:[],image:"https://lh3.googleusercontent.com/a/ACg8ocJp0IU1eLIxp7YogZzRM10IKRb3nF14H7QbK6IwPj8j=s96-c",payment:"Unpaid",projects:[]});
  }, []);
  return (
    <div className="w-full flex justify-around align-center flex-wrap">
      <div className = "flex justify-evenly gap-1 ">
        <div style={{paddingTop:"10px",paddingBottom:"10px",paddingLeft:"30px",paddingRight:"30px"}} className='flex-col flex justify-center gap-3 items-center border-[3px] border-[#eabc4e] rounded-xl'>
          <img 
            className="sm:text-sm rounded-xl shadow-lg"
            src= {`${userData.image}`} 
            height= "150px" 
            width="150px"
          />
          <div className = "flex flex-col gap-1 text-center">
            <div>
              <b className= "text-2xl mb-0">{userData.name}</b>
              <p className = "text-sm text-gray-500 mt-0">{userData.role}</p>
            </div>

            <div className="flex flex-col ">
              <p>{userData.major}</p>
              <p>{userData.studentType}</p>
            </div> 
            <div className= "flex justify-center gap-1 mt-1">
              <a href={`${userData.email}`} target="_blank"><Image src={Email} width={100} height={100} className="w-5 h-5"/></a>
              <a href={`${userData.linkedin}`} target="_blank"><Image src={LinkedIn} width={100} height={100} className="w-5 h-5"/></a>
              <a href={`${userData.instagram}`} target="_blank"><Image src={Instagram} width={100} height={100} className="w-5 h-5"/></a>
              <a href={`${userData.discord}`} target="_blank"><Image src={Discord} width={100} height={100} className="w-5 h-5"/></a>
            </div>
          </div>
        </div>
      </div>
      <div className = "p-5 border-[3px] border-[#eabc4e] rounded-xl">
        <b className= "text-2xl mb-0">Enrolled Upcoming Events</b>

      </div>
    </div>
  )
}

export default MemberProfile