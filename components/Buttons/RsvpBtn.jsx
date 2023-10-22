import React, { useState } from "react";

const RsvpBtn = () => {
  const [isRsvp, setIsRsvp] = useState(false);
  const handleRSVP = () => setIsRsvp(!isRsvp);
  return (
    <button onClick={handleRSVP}>{isRsvp ? "You have RSVP'd" : "RSVP"}</button>
  );
};

export default RsvpBtn;
