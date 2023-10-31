import TextInput from "@/components/Admin/TextInput";
import React from "react";
import Checkbox, { CheckboxGroup } from "../Checkbox";
import Dropdown from "../Dropdown";

const AttendanceInputs = ({ loading, inputErrors }) => {
    const [selectedAudienceTypes, setSelectedAudienceTypes] = React.useState(
        new Set()
    );

    const toggleCheckbox = (item) => {
        setSelectedAudienceTypes((prevItems) => {
            const newItems = new Set(prevItems);
            if (newItems.has(item)) {
                newItems.delete(item);
            } else {
                newItems.add(item);
            }
            return newItems;
        });
    };

    return (
        <>
            <TextInput
                name="presenter"
                placeholder={"John Doe"}
                label={"Preseneter"}
                loading={loading}
            />
            <Dropdown
                name="type"
                label={"Event Type"}
                loading={loading}
                options={["Event", "Workshop"]}
            />
            <CheckboxGroup
                values={Array.from(selectedAudienceTypes)}
                name="audienceType"
                label="Audience Type"
            >
                <Checkbox
                    onChange={() => toggleCheckbox("Undergraduate")}
                    label="Undergraduate"
                    loading={loading}
                />
                <Checkbox
                    onChange={() => toggleCheckbox("Graduate")}
                    label="Graduate"
                    loading={loading}
                />
                <Checkbox
                    onChange={() => toggleCheckbox("Alumni")}
                    label="Alumni"
                    loading={loading}
                />
            </CheckboxGroup>
            <TextInput
                type="number"
                name="maxAttendees"
                placeholder={"100"}
                label={"Maximum Attendees*"}
                loading={loading}
                error={inputErrors.maxAttendees}
            />
            <Checkbox
                value={true}
                name="paidMemberOnly"
                label="This event is for paid members only."
                loading={loading}
            />
        </>
    );
};

export default AttendanceInputs;
