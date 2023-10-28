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
import { useRouter } from "next/navigation";
import React from "react";

// This function validates the inputs and sets/unsets the errors for each input
const validateInputs = (data, setErrors) => {
    let error = false;

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
    } else if (new Date(data.date) < new Date()) {
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

    if (data.deadline && new Date(data.deadline) < new Date()) {
        setErrors((prev) => ({
            ...prev,
            deadline: "Deadline must be in the future.",
        }));
        error = true;
    } else if (data.deadline && new Date(data.deadline) > new Date(data.date)) {
        setErrors((prev) => ({
            ...prev,
            deadline: "Deadline must be before the event date.",
        }));
        error = true;
    } else {
        setErrors((prev) => ({
            ...prev,
            deadline: "",
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
    const router = useRouter();

    const [loading, setLoading] = React.useState(false);
    const [formError, setFormError] = React.useState(null); // This is the error that will be displayed at the bottom of the form to inform the user of a input/server error
    const [longRequestMessage, setLongRequestMessage] = React.useState(null); // This is the the message that will be displayed when a request is taking longer than usual
    const [inputErrors, setInputErrors] = React.useState({
        // image: "",
        title: "",
        description: "",
        date: "",
        deadline: "",
        location: "",
        maxAttendees: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setLongRequestMessage(null);
        setFormError(null);

        const timer = setTimeout(() => {
            setLongRequestMessage(
                "The operation is taking longer than expected..."
            );
        }, 5000);

        try {
            const data = new FormData(e.target);
            const inputs = Object.fromEntries(data.entries());
            const error = validateInputs(inputs, setInputErrors);
            if (error) {
                throw new Error("Validation failed");
            }

            // Need to do this because FormData adds backslashes to arrays, which can't be parsed into arrays in the backend
            let dataBody = Object.fromEntries(data.entries());
            dataBody.audienceType = JSON.parse(dataBody.audienceType);
            dataBody.tags = JSON.parse(dataBody.tags);
            dataBody = JSON.stringify(dataBody);

            const response = await fetch("/api/event", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: dataBody,
            });
            const json = await response.json();
            if (!response.ok) {
                throw new Error(json.error);
            }

            router.push(`/admin`);
        } catch (err) {
            if (err.message === "Validation failed") {
                setFormError("Please fix the errors above.");
            } else {
                setFormError(err.message);
            }
        } finally {
            setLoading(false);
            setLongRequestMessage(null);
            clearTimeout(timer);
        }
    };

    return (
        <main className="w-[700px] max-w-[100vw]">
            <Form
                onSubmit={handleSubmit}
                loading={loading}
                formError={formError}
                longRequestMessage={longRequestMessage}
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
