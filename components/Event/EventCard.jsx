import Image from "next/image";
import LocationIcon from "@/public/icons/location.png";
import ScheduleIcon from "@/public/icons/schedule.png";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AdminControl from "@/app/admin/accessControls/page";
import RsvpBtn from "../Buttons/RsvpBtn";
// const EventCard = ({ title, description, schedule, location, company, website }) => {
//   return (
//     <div

//     className="transition duration-100 ease-linear hover:shadow-2xl w-[20rem] sm:w-[18rem] h-auto border bg-gray-100 px-6 py-4 rounded-lg flex flex-col gap-2 drop-shadow-lg">
//       <h1 className="text-2xl sm:text-xl font-bold">{title}</h1>
//       {/* <p>{description}</p> */}
//       <div className="flex flex-col text-[16px] sm:text-sm font-semibold">
//         {company && website &&
//           <a href={website} target="_blank">{company}</a>
//         }
//         <div className="flex gap-2 items-center">
//           <Image src={Location} alt="Schedule" width={20} height={5} className="w-5 h-5" />
//           <p>{location}</p>
//         </div>
//         <div className="flex gap-2 items-center">
//           <Image src={Schedule} alt="Schedule" width={20} height={5} className="w-5 h-5" />
//           <p>{schedule}</p>
//         </div>
//       </div>
const EventCard = ({
  id,
  title,
  description,
  presenters,
  schedule,
  location,
  company,
  website,
  imageUrl,
  maxAttendees,
  tags,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { data: session, status } = useSession();

  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer", // Change cursor on hover
    boxShadow: isHovered
      ? "0 8px 12px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.06)"
      : "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)", // Increase shadow on hover
  };

  useEffect(() => {
    if (status === "authenticated") {
      setIsAdmin(session?.user.role === "admin");
    }
  }, [session]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden"
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <Image
            src={imageUrl}
            width={400}
            height={250}
            alt="Event Image"
            className="w-full"
          />
        </div>
        {isAdmin && <AdminControl {...{ id, title, description, presenters, schedule, location, imageUrl, maxAttendees, tags }} />}
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600 text-base">{description}</p>
        </div>
        <div className="px-6 py-2">
          <div className="flex items-center mb-2">
            <Image
              src={LocationIcon}
              alt="Location"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="text-gray-700 ml-2">Location: {location}</span>
          </div>
          <div className="flex items-center mb-2">
            <Image
              src={ScheduleIcon}
              alt="Schedule"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="text-gray-700 ml-2">Schedule: {schedule}</span>
          </div>
          {tags && tags.length > 0 && (
            <>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-600 text-sm font-semibold rounded-full px-3 py-1 m-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <RsvpBtn />
            </>
          )}
        </div>
        {company && website && (
          <div className="px-6 py-4 flex justify-between">
            <p className="text-indigo-600 text-sm font-semibold"></p>
            <a
              href={website}
              target="_blank"
              className="text-indigo-600 text-sm font-semibold"
            >
              Hosted by {company}
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default EventCard;
