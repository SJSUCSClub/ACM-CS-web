"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "@/components/Hero";
import Officers from "@/components/Officer/Officers";
import Events from "@/components/Event/Events";
import ImagePlayer from "@/components/ImageSlider/ImagePlayer";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    const isLastSlide = currentIndex === 8;
    const newIndex = isLastSlide ? 1 : currentIndex + 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);

  }, [currentIndex]);

  return (
    <main className="space-y-24 flex flex-col justify-center items-center duration-300">
      <div
        className={`bg-custom-bg-${currentIndex} bg-cover bg-center w-screen h-screen mt-[-87px]`}>
        <div className="bg-black bg-opacity-[70%] h-screen">
          <Hero />
        </div>
      </div>

      <Events />
      <Officers />
    </main >
  );
}

