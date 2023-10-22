import DeleteBtn from "@/components/Buttons/DeleteBtn";
import EditBtn from "@/components/Buttons/EditBtn";
import React from "react";

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
  return (
    <>
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
    </>
  );
};

export default AdminControl;
