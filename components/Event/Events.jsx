import React from 'react'
import EventCard from './EventCard'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Events = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const events = [
    {
      title: "MESA Club Fair",
      description: "Come to learn more about us at the Club Fair!",
      schedule: "Sept 13, 11 AM - 2 PM",
      location: "7th Street Plaza",
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

  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (visibleItems.length < events.length) {
        setVisibleItems((prevVisible) => [...prevVisible, prevVisible.length]);
      } else {
        clearInterval(intervalId);
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [visibleItems]);

  return (
    <div className="flex flex-col gap-6 mt-8 sm:justify-center sm:items-center">
      <h1 className="text-3xl sm:text-xl font-bold">Upcoming Events</h1>
      <div className="xl:grid xl:grid-cols-3 gap-6 sm:flex sm:flex-wrap md:flex md:flex-wrap items-center justify-center">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={
              visibleItems.includes(index)
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >

            <EventCard key={index} {...event} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Events