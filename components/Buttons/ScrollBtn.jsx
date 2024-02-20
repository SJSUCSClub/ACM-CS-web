import React from "react";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/public/icons/arrow.png";
export default function ScrollButton({ amount, fadeIn }) {
  const scroll = () => {
    window.scrollBy({
      top: amount,

      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <button onClick={scroll}>
          <Image src={Arrow} className="animate-fade-in-image w-5 h-5" />
        </button>
      </div>
    </>
  );
}
