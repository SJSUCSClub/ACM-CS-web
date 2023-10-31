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
                name="deadline"
                type="datetime-local"
                label={"Deadline"}
                loading={loading}
                error={inputErrors.deadline}
            />
            <TextInput
                name="location"
                placeholder={"MQH 227"}
                label={"Location*"}
                loading={loading}
                error={inputErrors.location}
            />
        </>
    );
};

export default LogisticsInputs;
