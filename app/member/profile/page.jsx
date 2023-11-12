"use client";
import React from 'react'
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import LinkedIn from '@/public/icons/outlined linkedin.png';
import Discord from '@/public/icons/outlined Discord.png';
import Email from '@/public/icons/outlined email.png';
import Instagram from '@/public/icons/outlined instagram.png';
import LinkToButton from '../../../components/Buttons/LinkToButton';
import EventCard from '../../../components/Event/EventCard';
import { motion } from 'framer-motion'

let bio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const events = [{ title: "MESA Club Fair",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 13, 11 AM - 2 PM",location: "7th Street Plaza",},{title: "Kohl's Info Session",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 14, 1 PM - 2 PM",location: "MQH 227",},{title: "CS Club Fair 2",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 15, 11 AM - 2 PM",location: "MQH 226 - 227",},{ title: "MESA Club Fair",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 13, 11 AM - 2 PM",location: "7th Street Plaza",},{title: "Kohl's Info Session",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 14, 1 PM - 2 PM",location: "MQH 227",}]
const attendedEvents = [{ title: "MESA Club Fair2",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 13, 11 AM - 2 PM",location: "7th Street Plaza",},{title: "Kohl's Info Session2",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 14, 1 PM - 2 PM",location: "MQH 227",},{title: "CS Club Fair 22",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 15, 11 AM - 2 PM",location: "MQH 226 - 227",}]
const attendedWorkshops = [{ title: "MESA Club Fair3",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 13, 11 AM - 2 PM",location: "7th Street Plaza",},{title: "Kohl's Info Session3",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 14, 1 PM - 2 PM",location: "MQH 227",},{title: "CS Club Fair 23",description: "Come to learn more about us at the Club Fair!",schedule: "Sept 15, 11 AM - 2 PM",location: "MQH 226 - 227",}]
const MemberProfile = () => {
  const [userData, setUserData] = useState(0);
  const [displayEvents, setDisplayEvents] = useState(-1);
  const [eventsList, setEventsList] = useState([]);
  const [bioHeight, setBioHeight] = useState(0)
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const bioRef = useRef(null);

  const updateDimensions = () => {
    //maybe make another website design if window height/width is phone size?
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setBioHeight(bioRef.current.clientHeight);
  }
  
  useEffect(() => {
    setUserData({name:"Bob Ross",discord:"https://discord.com/",instagram:"https://www.instagram.com/",linkedin:"https://www.linkedin.com/",github:"https://github.com/",email:"anemail@gmail.com",major:"Computer Science",studentType:"Undergraduate",role:"User",events:events,attendedEvents:attendedEvents,attendedWorkshops:attendedWorkshops,image:"https://lh3.googleusercontent.com/a/ACg8ocJp0IU1eLIxp7YogZzRM10IKRb3nF14H7QbK6IwPj8j=s96-c",payment:"Unpaid",projects:[],bio:bio,createdAt:Date.now});
    if(displayEvents == 0){
      setEventsList(userData.events);
    }else if(displayEvents==1){
      setEventsList(userData.attendedEvents);
    }else{
      setEventsList(userData.attendedWorkshops);
    }
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [displayEvents]);
  let onClickButton= (event, num) =>{
    // event.preventDefault();
    setDisplayEvents(num);
  }
  return (
    <div className="w-full h-full flex flex-col ">
      {/* top */}
      <div className="w-full min-h-[400px] ">  
        <div className=" min-w-max h-full w-full flex items-center flex-col">
          <div style={{minWidth:"50"}} className="w-5/6 bg-[#263238] rounded-2xl min-h-[11rem]"/>
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
                  <div className="flex w-full max-h-[80px]">
                    <div className=" w-full font-bold flex gap-2">
                      {userData.major},  {userData.studentType}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end w-full">
                      <a href={`${userData.email}`} target="_blank"><Image src={Email} width={100} height={100} className="rounded-full w-10 h-10"/></a>
                      <a href={`${userData.linkedin}`} target="_blank"><Image src={LinkedIn} width={100} height={100} className="rounded-full w-10 h-10"/></a>
                      <a href={`${userData.instagram}`} target="_blank"><Image src={Instagram} width={100} height={100} className="rounded-full w-10 h-10"/></a>
                      <a href={`${userData.discord}`} target="_blank"><Image src={Discord} width={100} height={100} className="rounded-full w-10 h-10"/></a>
                      {/* github too  */}
                    </div>
                  </div>
                  <div ref={bioRef} style={{maxWidth:"600px"}} className="relative">
                    Bio: {userData.bio}
                  </div>
                </div>
              </div>
          </div>
        </div> 
      </div>
      {/* bottom */}
      <div style={{paddingTop:bioHeight}} className="w-full h-full flex flex-col flex-wrap gap-10">
        <div className="w-full flex justify-center">
            <div class="flex justify-center flex-wrap gap-5 text-black">
              <button onClick={(e)=>{onClickButton(e,0)}} class="transition text-sm font-medium rounded-s-lg hover:bg-gray-700 hover:text-white ">
              {/* checked="checked" */}
                <input  class="hidden" type="radio" id="enrolled" name="row"/>
                <label class="p-3" for="enrolled">Enrolled Upcoming Events</label>
              </button>
              <button onClick={(e)=>{onClickButton(e,1)}} class="transition text-sm font-medium rounded-s-lg hover:bg-gray-700 hover:text-white ">
                <input class="hidden" type="radio" id="attendedEvents" name="row"/>
                <label class="p-3" for="attendedEvents">Attended Events</label>
              </button>
              <button onClick={(e)=>{onClickButton(e,2)}} class="transition text-sm font-medium rounded-s-lg hover:bg-gray-700 hover:text-white ">
                <input class="hidden" type="radio" id="attendedWorkshops" name="row"/>
                <label class="p-3" for="attendedWorkshops">Attended Workshops</label>
              </button>
            </div>
        </div>
        <div class="flex gap-5 justify-center flex-wrap">
          {eventsList!= null &&
            eventsList.map((event, index) => (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <EventCard key={index} {...event} />
              </motion.button>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default MemberProfile