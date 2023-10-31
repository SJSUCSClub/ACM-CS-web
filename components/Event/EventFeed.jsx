import Image from "next/image";
import React from "react";
import EventCard from "./EventCard";

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
  {
    title: "CS Club Fair 2",
    description: "Come to learn more about us at the Club Fair!",
    schedule: "Sept 15, 11 AM - 2 PM",
    location: "MQH 226 - 227",
  },
];

const getEvents = async () => {
  try {
    const rest = await fetch("http://localhost:3000/api/event", {
      cache: "no-cache",
    });

    if (!rest.ok) {
      throw new Error(rest);
    }

    const json = await rest.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
};

export default function EventFeed() {
  const events = Object.entries(getEvents());
  return (
    <>
      <div className="grid m-4 grid-cols-3 gap-5">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </>
  );
}
