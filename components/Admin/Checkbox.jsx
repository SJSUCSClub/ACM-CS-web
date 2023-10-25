import React from "react";

const Checkbox = ({ label, error, loading, placeholder, ...props }) => {
    return (
        <div className="text-md flex gap-5 items-center ">
            <div class="inline-flex items-center">
                <label
                    className={`${
                        !loading && "cursor-pointer"
                    } relative flex items-center rounded-full`}
                    for="checkbox"
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

            {/* Label */}
            <label>{label}</label>
        </div>
    );
};

export default Checkbox;
