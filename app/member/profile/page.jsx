"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LinkedIn from '@/public/icons/linkedin.png';
import Discord from '@/public/icons/Discord.svg';
import Email from '@/public/icons/email.svg';
import Instagram from '@/public/icons/instagram.svg';
import LinkToButton from '../../../components/Buttons/LinkToButton';

let bio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const MemberProfile = () => {
  const [userData, setUserData] = useState(0);
  useEffect(() => {
    setUserData({name:"Bob Ross",discord:"https://discord.com/",instagram:"https://www.instagram.com/",linkedin:"https://www.linkedin.com/",github:"https://github.com/",email:"anemail@gmail.com",major:"Computer Science",studentType:"Undergraduate",role:"User",events:[],image:"https://lh3.googleusercontent.com/a/ACg8ocJp0IU1eLIxp7YogZzRM10IKRb3nF14H7QbK6IwPj8j=s96-c",payment:"Unpaid",projects:[],bio:bio,createdAt:Date.now});
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-14">
      {/* top */}
      <div className="w-full h-96 ">  
        <div className=" min-w-max h-full w-full flex items-center flex-col">
          <div style={{minWidth:"50"}} className="w-5/6 bg-[#263238] rounded-2xl h-44"/>
          <div style={{marginTop:"75px"}}className= "absolute w-5/6 flex gap-8">
            <div className="min-w-max ml-14 m-5 relative flex flex-col items-center">
              <img
                className='border-solid border-4 border-white-100 sm:text-sm rounded-full shadow-lg mb-50'
                src= {`${userData.image}`} 
                height= "150px" 
                width="150px"
              />
              <p className = "italic text-gray-500 ">{userData.role}</p>
              <div className="m-4">
                <LinkToButton  url={`edit.com`} text="Edit Info"/>
              </div>
            
            </div>
              <div className="mt-10 w-full flex flex-col gap-10">
                <b className= "text-white text-5xl ">{userData.name}</b>
                <div className="flex w-full flex-col gap-3">
                  <div className="flex w-full">
                    <div className="w-full font-bold flex gap-2">
                      {userData.major},  {userData.studentType}
                    </div>
                    <div className="flex gap-2 justify-end w-full">
                      <a href={`${userData.email}`} target="_blank"><Image src={Email} width={100} height={100} className="rounded-full w-10 h-10"/></a>
                      <a href={`${userData.linkedin}`} target="_blank"><Image src={LinkedIn} width={100} height={100} className="rounded-full w-10 h-10"/></a>
                      <a href={`${userData.instagram}`} target="_blank"><Image src={Instagram} width={100} height={100} className="rounded-full w-10 h-10"/></a>
                      <a href={`${userData.discord}`} target="_blank"><Image src={Discord} width={100} height={100} className="rounded-full w-10 h-10"/></a>
                      {/* github too  */}
                    </div>
                  </div>
                  <div style={{maxWidth:"600px", minWidth:"400px"}}>
                    Bio: {userData.bio}
                  </div>
                </div>
              </div>
          </div>
        </div>        
      </div>
      {/* bottom */}
      <div className="w-full h-full">
        <div className="w-full flex justify-center">
          {/* <div role="group" style={{minHeight:"50px"}} className="w-full flex justify-center items-center gap-8">
            <button type="button" class="px-4 py-2 text-sm font-medium border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              Enrolled Upcoming Events
            </button >
            <button type="button" class="px-4 py-2 text-sm font-medium border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              Attended Events
            </button>
            <button type="button" class="px-4 py-2 text-sm font-medium border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
              Attended Workshops
            </button>
          </div> */}
            <div class="flex gap-3 text-black">
              <button class="transition text-sm font-medium rounded-s-lg hover:bg-gray-900 hover:text-white dark:hover:text-white dark:hover:bg-gray-700 ">
                <input class="hidden" type="radio" id="enrolled" name="row"/>
                <label class="p-3" for="enrolled">Enrolled Upcoming Events</label>
              </button>
              <button class="transition text-sm font-medium rounded-s-lg hover:bg-gray-900 hover:text-white dark:hover:text-white dark:hover:bg-gray-700 ">
                <input class="hidden" type="radio" id="attendedEvents" name="row"/>
                <label class="p-3" for="attendedEvents">Attended Events</label>
              </button>
              <button class="transition text-sm font-medium rounded-s-lg hover:bg-gray-900 hover:text-white dark:hover:text-white dark:hover:bg-gray-700 ">
                <input class="hidden" type="radio" id="attendedWorkshops" name="row"/>
                <label class="p-3" for="attendedWorkshops">Attended Workshops</label>
              </button>
            </div>
        </div>
      </div>
    </div>

  )
}
{/* <div className = "flex justify-evenly gap-1 ">
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

</div> */}
export default MemberProfile