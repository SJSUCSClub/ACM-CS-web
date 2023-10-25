import TextInput from "@/components/Admin/TextInput";
import React from "react";
import Checkbox from "../Checkbox";
import Dropdown from "../Dropdown";

const AttendanceInputs = ({ loading, inputErrors }) => {
    return (
        <>
            <TextInput
                type="number"
                name="maxAttendees"
                placeholder={"Event Maximum Attendees"}
                label={"Maximum Attendees*"}
                loading={loading}
                error={inputErrors.maxAttendees}
            />
            <Dropdown
                name="type"
                label={"Event Type"}
                loading={loading}
                options={["Event", "Workshop"]}
            />
            <Checkbox
                value={true}
                name="paidMember"
                label="This event is for paid members only."
                loading={loading}
            />
        </>
    );
};

export default AttendanceInputs;
