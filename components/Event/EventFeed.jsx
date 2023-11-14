"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import useSWR from "swr";

export default function EventFeed() {
  const fetcher = async () => {
    const rest = await fetch("http://localhost:3000/api/event");
    const json = await rest.json();
    return json.events;
  };
  /*
  
  
  const getEvents = async () => {
    
    try {
      const rest = await fetch("http://localhost:3000/api/event");

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

  useEffect(() => {getEvents()}, [events]);
*/

  const { data, isLoading, error } = useSWR(
    "http://localhost:3000/api/event",
    fetcher
  );

  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading events...</h1>;
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {data.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </>
  );
}
