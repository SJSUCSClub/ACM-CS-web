"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "@/components/Hero";
import Officers from "@/components/Officer/Officers";
import Events from "@/components/Event/Events";

export default function Home() {
  return (
    <main className="space-y-24">
      <div className="bg-custom-bg bg-cover bg-center w-screen h-screen mt-[-87px]">
        <div className="bg-black bg-opacity-[70%] h-screen">
          <Hero />
        </div>
      </div>

      <Events />
      <Officers />
    </main >
  );
}

