import React from "react";
import EventCard from "./EventCard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import EventFeed from "./EventFeed";

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
    <>
      <div className="flex flex-col gap-6 mt-8 sm:justify-center sm:items-center">
        <h1 className="text-3xl sm:text-xl font-bold">Upcoming Events</h1>
        <EventFeed />
      </div>
    </>
  );
};

export default Events;
