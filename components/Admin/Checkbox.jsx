import React from "react";

export const CheckboxGroup = ({ values, label, children, ...props }) => {
    return (
        <div className="text-md flex flex-col gap-1 pb-4">
            {/* Store the checkbox values as an array in a hidden Input so it will be submitted to the form */}
            <input type="hidden" value={JSON.stringify(values)} {...props} />
            {/* Label */}
            {label && <label>{label}</label>}
            {children}
        </div>
    );
};

const Checkbox = ({ label, error, loading, placeholder, ...props }) => {
    return (
        <div className="text-md flex gap-5 items-center">
            <div className="inline-flex items-center">
                <label
                    className={`${
                        !loading && "cursor-pointer"
                    } relative flex items-center rounded-full`}
                    htmlFor="checkbox"
                >
                    {/* Checkbox */}
                    <input
                        type="checkbox"
                        className={`${loading && "border-gray-100"}  ${
                            error ? "border-red-500" : "border-gray-200"
                        } peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border  transition-all  checked:border-blue-300 checked:bg-blue-500`}
                        id="checkbox"
                        disabled={loading}
                        {...props}
                    />

                    {/* Check symbol */}
                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </label>
            </div>

            {/* Label */}
            <label>{label}</label>
        </div>
    );
};

export default Checkbox;
