"use client"
import React from "react";
import WorkshopCard from "@/components/Workshop/WorkshopCard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WorkshopsPage = () => {

  const [visibleItems,setVisibleItems] = useState([]);

  const events = [
    {
      title: "React Workshop",
      description: "Come to learn more front-end web development!",
      schedule: "Oct 16, 3 PM",
      location: "MQH 227",
    },
    {
      title: "TypeScript Workshop",
      description:
        "Dive into using React.js with TypeScript and Gatsby! Long description testing here.",
      schedule: "Oct 26, 1:30 PM",
      location: "MQH 227",
    },
  ];

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
    <div className="xl:h-[80vh] flex flex-col gap-12 sm:gap-2 justify-center items-center max-w-[1440px]">
      <div className="flex flex-col gap-6 sm:justify-center sm:items-center">
        <h1 className="text-5xl text-[#196096] sm:text-3xl font-black drop-shadow-lg text-center">
          Workshops
        </h1>
        <h2 className="text-2xl font-bold mb-10 px-4 text-center">
          🚀 Dive into the world of coding excellence with our interactive
          workshops!
        </h2>
        {events.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y:0 }}
            animate={
              visibleItems.includes(index)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: -50 }
            }
            transition = {{ duration: 0.5, delay: index * 0.1 }}
          >

            <WorkshopCard key={index} {...event} />
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkshopsPage;
