import React, { useEffect, useState } from "react";
import Arrow from "@/public/icons/arrow.svg";

const ScrollDownArrow = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY !== 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight - 78,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <div
      className={`arrow ${
        scrolled ? "hidden" : "block opacity-100"
      } cursor-pointer left-1/2 bottom-16 w-8 h-8`}
      onClick={scrollDown}
    >
      <img alt="Scroll Arrow" src={Arrow.src} />
    </div>
  );
};

export default ScrollDownArrow;
