import TextInput from "@/components/Admin/TextInput";
import React from "react";

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
            <TextInput
                name="type"
                placeholder={"Event Type"}
                label={"Type"}
                loading={loading}
            />
            <div className="text-md flex gap-5 items-center ">
                <div class="inline-flex items-center">
                    <label
                        className="relative flex items-center rounded-full cursor-pointer"
                        for="checkbox"
                        data-ripple-dark="true"
                    >
                        <input
                            type="checkbox"
                            className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all  checked:border-blue-300 checked:bg-blue-500"
                            id="checkbox"
                            name="paidMember"
                            value={true}
                        />
                        <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </label>
                </div>
                <label>This event is for paid members only.</label>
            </div>
        </>
    );
};

export default AttendanceInputs;
