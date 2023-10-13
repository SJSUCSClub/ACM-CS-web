import Image from 'next/image'
import React from 'react'
import Location from '@/public/icons/location.png'
import Schedule from '@/public/icons/schedule.png'

const EventCard = ({ title, description, schedule, location, company, website }) => {
  return (
    <div 
      
    className="border transition duration-100 ease-linear hover:shadow-lg w-[20rem] sm:w-[18rem] h-auto bg-neutral-200 px-6 py-4 rounded-lg flex flex-col gap-2 shadow-md">
      <h1 className="text-2xl sm:text-xl font-bold">{title}</h1>
      {/* <p>{description}</p> */}
      <div className="flex flex-col text-[16px] sm:text-sm font-semibold">
        {company && website &&
          <a href={website} target="_blank">{company}</a>
        }
        <div className="flex gap-2 items-center">
          <Image src={Location} alt="Schedule" width={20} height={5} className="w-5 h-5" />
          <p>{location}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={Schedule} alt="Schedule" width={20} height={5} className="w-5 h-5" />
          <p>{schedule}</p>
        </div>
      </div>


    </div>
  )
}

export default EventCard