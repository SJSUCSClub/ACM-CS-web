import TextInput from "@/components/Admin/TextInput";
import React from "react";
// import ImageInput from "../ImageInput";

const EventInputs = ({ loading, inputErrors }) => {
    return (
        <>
            {/* TODO: Uncomment once AWS for images is setup */}
            {/* <ImageInput
                label={"Image"}
                name="image"
                loading={loading}
                error={inputErrors.image}
            /> */}
            <TextInput
                name="image"
                placeholder={"Event Image URL"}
                label={"Image URL"}
                loading={loading}
                // error={inputErrors.image}
            />
            <TextInput
                name="title"
                placeholder={"Event Name"}
                label={"Title*"}
                loading={loading}
                error={inputErrors.title}
            />
            <TextInput
                name="description"
                fullHeight
                placeholder={"Event Description"}
                label={"Description*"}
                loading={loading}
                error={inputErrors.description}
            />
        </>
    );
};

export default EventInputs;
