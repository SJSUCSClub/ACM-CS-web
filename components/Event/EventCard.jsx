import Image from "next/image";
import React, { useState, useEffect } from "react";
import Location from "@/public/icons/location.png";
import Schedule from "@/public/icons/schedule.png";
import { useSession } from "next-auth/react";
import AdminControl from "@/app/admin/accessControls/page";
import RsvpBtn from "../Buttons/RsvpBtn";

const EventCard = ({
  id,
  title,
  description,
  presenters,
  schedule,
  location,
  company,
  website,
  image,
  maxAttendees,
  tags,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPaidMember, setIsPaidMember] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setIsAdmin(session?.user.role === "admin");
      setIsPaidMember(session?.user.payment === "paid");
    }
  }, [session]);
  return (
    <>
      <div className="transition duration-100 ease-linear hover:shadow-2xl w-[20rem] sm:w-[18rem] h-auto bg-neutral-200 px-6 py-4 rounded-lg flex flex-col gap-2 drop-shadow-lg">
        <h1 className="text-2xl sm:text-xl font-bold">{title}</h1>
        {/* <p>{description}</p> */}
        <div className="flex flex-col text-[16px] sm:text-sm font-semibold">
          {company && website && (
            <a href={website} target="_blank">
              {company}
            </a>
          )}
          <div className="flex gap-2 items-center">
            <Image
              src={Location}
              alt="Schedule"
              width={20}
              height={5}
              className="w-5 h-5"
            />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src={Schedule}
              alt="Schedule"
              width={20}
              height={5}
              className="w-5 h-5"
            />
            <p>{schedule}</p>
          </div>
        </div>
      </div>
      {isAdmin && (
        <AdminControl
          id={id}
          title={title}
          description={description}
          presenters={presenters}
          schedule={schedule}
          location={location}
          image={image}
          maxAttendees={maxAttendees}
          tags={tags}
        />
      )}

      {isPaidMember && <RsvpBtn />}
    </>
  );
};

export default EventCard;
