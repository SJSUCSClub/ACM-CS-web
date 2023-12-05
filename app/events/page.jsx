"use client";

import React from "react";
import Image from "next/image";
import ScrollDownArrow from "@/components/Buttons/ScrollDownButton";

import csimg from "@/public/icons/csimg.png";
import network from "@/public/icons/network.png";
import media from "@/public/icons/media.png";
import mentor from "@/public/icons/mentor.png";
import acmproj from "@/public/icons/acmproj.png";
import EventFeed from "@/components/Event/EventFeed";

export default function AboutUs() {
  return (
    <>
      <div className="">
        <h1 className="font-extrabold text-5xl text-[#196096] sm:text-3xl">
          Upcoming Events
        </h1>
        <div className="border-[#eabc4e] border-2 rounded-xl p-3 border-spacing-5">
          <EventFeed />
        </div>
      </div>
    </>
  );
}
