import TextInput from "@/components/Admin/TextInput";
import React from "react";

// TODO: Add remaining inputs, form validation, and submit button
/*
Event:
Image
Title
Description

Logistics:
Date
Location

Attendance:
Max Attendees
Paid Member Only or Not (dropdown)
Type of Event (dropdown)
*/

const page = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold drop-shadow-lg">
                Create a New Event
            </h1>
            <TextInput
                id="eventTitle"
                label="Event Title"
                error="Wrong input."
                placeholder="Enter event title"
            />
            <TextInput
                id="eventTitle"
                label="Event Title"
                error=""
                placeholder="Enter event title"
            />
        </div>
    );
};

export default page;
