"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

export default function EventFeed() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const rest = await fetch("http://localhost:3000/api/event")
  
      if (!rest.ok) {
        throw new Error(rest);
      }
  
      const json = await rest.json();
      setEvents(json.events);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, [events]);

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </>
  );
}
