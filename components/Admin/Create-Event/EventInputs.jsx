import TextInput from "@/components/Admin/TextInput";
import React from "react";
import TagsInput from "../TagsInput";
// import ImageInput from "../ImageInput";

const EventInputs = ({ loading, inputErrors }) => {
    const [tags, setTags] = React.useState(new Set());

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
                placeholder={"https://www.example.com/cat.jpg"}
                label={"Image URL"}
                loading={loading}
                // error={inputErrors.image}
            />
            <TextInput
                name="title"
                placeholder={"Networking Event"}
                label={"Title*"}
                loading={loading}
                error={inputErrors.title}
            />
            <TextInput
                name="description"
                fullHeight
                placeholder={"This is a description of the event."}
                label={"Description*"}
                loading={loading}
                error={inputErrors.description}
            />
            <TagsInput
                name="tags"
                placeholder={"Javascript, HTML, Networking"}
                label={"Tags"}
                loading={loading}
                helper="Separate tags with commas"
                tags={Array.from(tags)}
                setTags={setTags}
            />
        </>
    );
};

export default EventInputs;
