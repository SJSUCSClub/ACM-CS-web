"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Hero from "@/components/Hero";
import Officers from "@/components/Officer/Officers";
import Events from "@/components/Event/Events";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/public/icons/arrow.png";
import ScrollButton from "@/components/Buttons/ScrollBtn";
export default function Home() {
  const ref = useRef(null);
  const doClick = () => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="flex snap-y snap-mandatory flex-col items-center justify-center md:px-16 2xl:px-24 gap-16">
      <Hero />

      <Events />

      <Officers />
    </main>
  );
}
