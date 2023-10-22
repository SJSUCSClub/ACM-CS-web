"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const EditEventForm = ({
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
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPresenters, setNewPresenters] = useState(presenters);
  const [newSchedule, setNewSchedule] = useState(schedule);
  const [newLocation, setNewLocation] = useState(location);
  const [newImage, setNewImage] = useState(image);
  const [newMaxAttendees, setNewMaxAttendees] = useState(maxAttendees);
  const [newTags, setNewTags] = useState(tags);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.patch(
        `http://localhost:3000/api/events/${id}`,
        {
          title: newTitle,
          description: newDescription,
          presenters: newPresenters,
          schedule: newSchedule,
          location: newLocation,
          image: newImage,
          maxAttendees: newMaxAttendees,
          tags: newTags,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to update event");
      }
      router.refresh();
      router.push("/");
    } catch (error) {}
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-amber-200 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
            className="border border-zinc-950 px-4 py-2 rounded"
            type="text"
            placeholder="Event Title"
          />

          <input
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
            className="border border-zinc-950 px-4 py-2 rounded"
            type="text"
            placeholder="Event Description"
          />

          <input
            onChange={(e) => setNewPresenters(e.target.value)}
            value={newPresenters}
            className="border border-zinc-950 px-4 py-2 rounded"
            type="text"
            placeholder="Event Presenters"
          />
          <input
            onChange={(e) => setNewSchedule(e.target.value)}
            value={newSchedule}
            className="border border-zinc-950 px-4 py-2 rounded"
            type="text"
            placeholder="Event Schedule"
          />
          <input
            onChange={(e) => setNewLocation(e.target.value)}
            value={newLocation}
            className="border border-zinc-950 px-4 py-2 rounded"
            type="text"
            placeholder="Event Location"
          />
          <input
            onChange={(e) => setNewImage(e.target.files[0])}
            className="border border-zinc-950 px-4 py-2 rounded"
            type="file"
            accept="image/*"
          />
          <input
            onChange={(e) => setNewMaxAttendees(e.target.value)}
            value={newMaxAttendees}
            className="border border-zinc-950 px-4 py-2 rounded"
            type="text"
            placeholder="Event Max Attendees"
          />
          <input
            onChange={(e) => setNewTags(e.target.value)}
            value={newTags}
            className="border border-zinc-950 px-4 py-2 rounded"
            type="text"
            placeholder="Event Tags"
          />

          <button className="bg-blue-600 font-bold text-white py-3 px-6 rounded w-fit">
            Update Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEventForm;
