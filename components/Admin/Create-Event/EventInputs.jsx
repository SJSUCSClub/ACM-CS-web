import TextInput from "@/components/Admin/TextInput";
import React from "react";
import ImageInput from "../ImageInput";

const EventInputs = ({ loading, inputErrors }) => {
    return (
        <>
            <ImageInput
                label={"Image"}
                name="image"
                loading={loading}
                error={inputErrors.image}
            />
            <TextInput
                name="title"
                placeholder={"Event Name"}
                label={"Title"}
                loading={loading}
                error={inputErrors.title}
            />
            <TextInput
                name="description"
                fullHeight
                placeholder={"Event Description"}
                label={"Description"}
                loading={loading}
                error={inputErrors.description}
            />
        </>
    );
};

export default EventInputs;

// TODO: Add remaining inputs, form validation, and submit button
/*
Event:
Image
Title *
Description *

Logistics:
Date *
Location *

Attendance:
Max Attendees
Paid Member Only or Not (dropdown)
Type of Event (dropdown)
*/
