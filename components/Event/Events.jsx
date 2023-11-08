import EventFeed from "./EventFeed";
import React from 'react'
import EventCard from './EventCard'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Logo from '@/public/photos/background.jpg';
const Events = () => {
  const events = [
    {
      title: "MESA Club Fair",
      description: "Come to learn more about us at the Club Fair!",
      schedule: "Sept 13, 11 AM - 2 PM",
      location: "7th Street Plaza",
      tags: ["Club Fair", "Student Event", "Information Session"],
      imageUrl: Logo,
      company: '',
      website: "https://www.acmsjsu.org/"
    },
    {
      title: "Kohl's Info Session",
      description: "Come to learn more about us at the Club Fair!",
      schedule: "Sept 14, 1 PM - 2 PM",
      location: "MQH 227",
    },
    {
      title: "CS Club Fair 2",
      description: "Come to learn more about us at the Club Fair!",
      schedule: "Sept 15, 11 AM - 2 PM",
      location: "MQH 226 - 227",
    },
  ];

  return (
    <div className="flex flex-col gap-6 mt-8 sm:justify-center sm:items-center max-w-[1440px]">
      <h1 className="text-center font-extrabold text-5xl text-[#196096] sm:text-3xl">
        Upcoming Events
      </h1>
      <div className="border-[#eabc4e] border-2 rounded-xl p-3 border-spacing-5 ">
        <EventFeed />
      </div>
    </div>
  );
};

export default Events;
