import TextInput from "@/components/Admin/TextInput";
import React from "react";

const LogisticsInputs = ({ loading, inputErrors }) => {
    return (
        <>
            <TextInput
                name="start"
                type="datetime-local"
                label={"Start*"}
                loading={loading}
                error={inputErrors.start}
            />
            <TextInput
                name="end"
                type="datetime-local"
                label={"End*"}
                loading={loading}
                error={inputErrors.end}
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
