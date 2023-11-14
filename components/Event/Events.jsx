import EventFeed from "./EventFeed";
import React from "react";
import EventCard from "./EventCard";
import { easeIn, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "@/public/photos/background.jpg";
import Arrow from "@/public/icons/arrow.png";

import Image from "next/image";
import Link from "next/link";

const Events = () => {
  const [showMore, setShowMore] = useState(false);

  const FeedStyle = {
    height: "510px",
    transition: "transform 0.5s ease-in",
    overflow: "hidden",
  };

  return (
    <div className="flex flex-col gap-6 mt-8 sm:justify-center sm:items-center">
      <h1 className="text-center font-extrabold text-5xl text-[#196096] sm:text-3xl">
        Upcoming Events
      </h1>

      <div
        style={FeedStyle}
        className="border-[#eabc4e] border-2 rounded-xl p-3 border-spacing-5"
      >
        <EventFeed />
      </div>
      <div className="flex justify-center items-center">
        <Link href="/event">
          <Image src={Arrow} className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Events;
