"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ id }) {
  const router = useRouter();
  const deleteEvent = async () => {
    const confirmMsg = confirm("Are you sure you want to delete this event?");

    if (confirmMsg) {
      const res = await axios.delete(`http://localhost:3000/api/events/${id}`);

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button
      className="rounded-lg bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-700"
      onClick={deleteEvent}
    >
      Delete Event
    </button>
  );
}
