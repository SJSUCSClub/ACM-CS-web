import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { set } from "mongoose";
const RsvpBtn = () => {
  const { data: session, status } = useSession();
  const [isPaidMember, setIsPaidMember] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsSignedIn(true);
      setIsPaidMember(session?.user.payment === "paid");
    }
  }, [session]);

  const handleClick = () => {
    if (!isSignedIn) {
      alert("Please sign in to RSVP!");
    } else if (isSignedIn && !isPaidMember) {
      alert(
        "This is for paid members only! Please contact an Officer if this is an error."
      );
    } else {
      alert("RSVP Successful!");
    }
  };
  return (

    // TODO: Fix button to not show up on form
    <button
      onClick={handleClick}
      className="relative z-10 px-5 py-3 overflow-hidden font-medium text-white my-3  transition-colors duration-300 ease-out rounded-lg group"
    >
      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-blue-500"></span>
      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-blue-700 group-hover:-rotate-180 ease"></span>
      <span className="relative">RSVP</span>
    </button>

  );
};

export default RsvpBtn;
