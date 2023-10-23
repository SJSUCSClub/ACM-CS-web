import DeleteBtn from "@/components/Buttons/DeleteBtn";
import EditBtn from "@/components/Buttons/EditBtn";
import React, { useState } from "react";
const AdminControl = ({
  id,
  title,
  description,
  presenters,
  schedule,
  location,
  image,
  maxAttendees,
  tags,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropDown}
          data-dropdown-toggle="dropdown"
          className="absolute right-0 text-gray-600 hover:text-gray-800 focus:outline-none"
        >

         {/* dropdown menu icon */}
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
      </div>
      {isOpen && (
          <div className=" absolute right-0 absolute top-10 mt-2 w-48 rounded-md shadow-lg bg-zinc-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-200">
          <div className="py-1 flex flex-col space-y-5">
          <EditBtn
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
      <DeleteBtn id={id} />
          </div>
        </div>
      )}
      
    </>
  );
};

export default AdminControl;
