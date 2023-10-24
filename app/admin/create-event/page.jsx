"use client";

import AttendanceInputs from "@/components/Admin/Create-Event/AttendanceInputs";
import EventInputs from "@/components/Admin/Create-Event/EventInputs";
import LogisticsInputs from "@/components/Admin/Create-Event/LogisticsInputs";
import {
    Form,
    FormDescription,
    FormHeader,
    FormSection,
    FormSectionTitle,
    FormTitle,
} from "@/components/Admin/Form";
import React from "react";

// This function validates the inputs and sets/unsets the errors for each input
const validateInputs = (data, setErrors) => {
    let error = false;
    console.log(data);

    // TODO: Uncomment this once AWS for images is set up
    // if (
    //     data.image.type !== "image/png" &&
    //     data.image.type !== "image/jpeg" &&
    //     data.image.type !== "image/jpg" &&
    //     data.image.type !== "image/gif"
    // ) {
    //     setErrors((prev) => ({
    //         ...prev,
    //         image: "Upload a valid image.",
    //     }));
    //     error = true;
    // } else {
    //     setErrors((prev) => ({
    //         ...prev,
    //         image: "",
    //     }));
    // }

    if (!data.title) {
        setErrors((prev) => ({
            ...prev,
            title: "Title is required.",
        }));
        error = true;
    } else if (data.title.length > 150) {
        setErrors((prev) => ({
            ...prev,
            title: "Title is too long.",
        }));
        error = true;
    } else {
        setErrors((prev) => ({
            ...prev,
            title: "",
        }));
    }

    if (!data.description) {
        setErrors((prev) => ({
            ...prev,
            description: "Description is required.",
        }));
        error = true;
    } else {
        setErrors((prev) => ({
            ...prev,
            description: "",
        }));
    }

    if (!data.date) {
        setErrors((prev) => ({
            ...prev,
            date: "Date is required.",
        }));
        error = true;
    } else if (data.date < new Date()) {
        setErrors((prev) => ({
            ...prev,
            date: "Date must be in the future.",
        }));
        error = true;
    } else {
        setErrors((prev) => ({
            ...prev,
            date: "",
        }));
    }

    if (!data.location) {
        setErrors((prev) => ({
            ...prev,
            location: "Location is required.",
        }));
        error = true;
    } else {
        setErrors((prev) => ({
            ...prev,
            location: "",
        }));
    }

    if (!data.maxAttendees) {
        setErrors((prev) => ({
            ...prev,
            maxAttendees: "Max attendees is required.",
        }));
        error = true;
    } else {
        setErrors((prev) => ({
            ...prev,
            maxAttendees: "",
        }));
    }

    if (data.maxAttendees < 1) {
        setErrors((prev) => ({
            ...prev,
            maxAttendees: "Max attendees must be greater than 0.",
        }));
        error = true;
    } else {
        setErrors((prev) => ({
            ...prev,
            maxAttendees: "",
        }));
    }

    return error;
};

const page = () => {
    const [loading, setLoading] = React.useState(false);
    const [formError, setFormError] = React.useState(null); // This is the error that will be displayed at the bottom of the form to inform the user of a input/server error
    const [inputErrors, setInputErrors] = React.useState({
        // image: "",
        title: "",
        description: "",
        date: "",
        location: "",
        maxAttendees: "",
    });

    // TODO: Finish handleSubmit function, add setLoading
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const error = validateInputs(
            Object.fromEntries(data.entries()),
            setInputErrors
        );
        if (error) {
            setFormError("Please fix the errors above.");
            return;
        }
        // TODO: Submit data to API and catch server error here in else if
        else {
            setFormError(null);
        }
    };

    return (
        <main className="w-[700px] max-w-[100vw]">
            <Form
                onSubmit={handleSubmit}
                loading={loading}
                formError={formError}
            >
                <FormHeader>
                    <FormTitle>New Event</FormTitle>
                    <FormDescription>
                        Fill out each section of the form below to create a new
                        event. All fields marked with an asterisk (*) are
                        required.
                    </FormDescription>
                </FormHeader>
                <FormSection>
                    <FormSectionTitle>Event</FormSectionTitle>
                    <EventInputs loading={loading} inputErrors={inputErrors} />
                </FormSection>
                <FormSection>
                    <FormSectionTitle>Logistics</FormSectionTitle>
                    <LogisticsInputs
                        loading={loading}
                        inputErrors={inputErrors}
                    />
                </FormSection>
                <FormSection>
                    <FormSectionTitle>Attendance</FormSectionTitle>
                    <AttendanceInputs
                        loading={loading}
                        inputErrors={inputErrors}
                    />
                </FormSection>
            </Form>
        </main>
    );
};

export default page;
