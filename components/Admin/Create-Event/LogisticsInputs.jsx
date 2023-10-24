import TextInput from "@/components/Admin/TextInput";
import React from "react";

const LogisticsInputs = ({ loading, inputErrors }) => {
    return (
        <>
            <TextInput
                name="date"
                type="datetime-local"
                label={"Date*"}
                loading={loading}
                error={inputErrors.date}
            />
            <TextInput
                name="location"
                placeholder={"Event location"}
                label={"Location*"}
                loading={loading}
                error={inputErrors.location}
            />
        </>
    );
};

export default LogisticsInputs;
