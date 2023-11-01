import Image from "next/image";
import React from "react";
import Location from "@/public/icons/location.png";
import Schedule from "@/public/icons/schedule.png";

const WorkshopCard = ({ title, description, schedule, location }) => {
  return (
    <div className="border border-blue-400 rounded-2xl mx-10 p-6 mb-4 transition shadow-md duration-100 ease-linear hover:shadow-2xl sm:w-[18rem] h-auto flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl text-[#196096] font-bold">{title}</h2>
        <div className="flex gap-1 items-center">
          <Image src={Location} alt="Schedule" className="w-4 h-4" />
          <p className="">{location}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="overflow-wrap text-gray-700 xl:max-w-3xl">
          {description}
        </p>
        <div className="flex gap-1 items-center">
          <Image src={Schedule} alt="Schedule" className="w-4 h-4 ml-5" />
          <p className="">{schedule}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
