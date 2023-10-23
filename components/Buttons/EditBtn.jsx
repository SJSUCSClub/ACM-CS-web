"use client";

import React, { useState } from "react";
import EditEventForm from "../Event/EditEventForm";

const EditBtn = ({ ...props }) => {
  const {
    id,
    title,
    description,
    presenters,
    schedule,
    location,
    image,
    maxAttendees,
    tags,
  } = props;
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  return (
    <>
      <button
        onClick={openForm}
        className="rounded-lg bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-700"
      >
        Edit Event
      </button>
      {showForm && (
        <EditEventForm
          id={id}
          title={title}
          description={description}
          presenters={presenters}
          schedule={schedule}
          location={location}
          image={image}
          maxAttendees={maxAttendees}
          tags={tags}
          cancelForm={closeForm}
        />
      )}
    </>
  );
};

export default EditBtn;
