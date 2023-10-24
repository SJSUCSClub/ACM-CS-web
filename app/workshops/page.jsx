import React from "react";
import WorkshopCard from "@/components/Workshop/WorkshopCard";

const WorkshopsPage = () => {
  const events = [
    {
      title: "React Workshop",
      description: "Come to learn more front-end web development!",
      schedule: "Oct 16, 3 PM",
      location: "MQH 227",
    },
    {
      title: "TypeScript Workshop",
      description:
        "Dive into using React.js with TypeScript and Gatsby! Long description testing here. Should be on second line.",
      schedule: "Oct 26, 1:30 PM",
      location: "MQH 227",
    },
  ];

  return (
    <div className="xl:h-[80vh] flex flex-col gap-12 sm:gap-2 justify-center items-center max-w-[1440px]">
      <div className="flex flex-col gap-6 sm:justify-center sm:items-center">
        <h1 className="text-5xl text-[#196096] sm:text-3xl font-black drop-shadow-lg text-center">
          Workshops
        </h1>
        <h2 className="text-2xl font-bold mb-10 px-4 text-center">
          🚀 Dive into the world of coding excellence with our interactive
          workshops!
        </h2>
        {events.map((event, index) => (
          <WorkshopCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default WorkshopsPage;
