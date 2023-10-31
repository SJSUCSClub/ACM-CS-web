import React from "react";

const ImageInput = ({ label, error, loading, ...props }) => {
    return (
        <div className="text-md flex flex-col gap-1 ">
            {/* Label */}
            {label && <label htmlFor={props.name}>{label}</label>}

            {/* Input */}
            <input
                disabled={loading}
                type="file"
                className={`${
                    error && !loading && "ring-1 ring-red-500"
                } border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 block w-full text-md text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:text-md file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100`}
                {...props}
            />

            <div className="flex justify-between">
                {/* Helper text */}
                <p className="bg-white h-6 flex-1 text-left text-gray-500 pl-2 text-sm whitespace-nowrap">
                    PNG, JPG, or GIF.
                </p>

                {/* Error */}
                <p className="bg-white h-6 flex-1 text-right text-red-500 pl-2 text-sm whitespace-nowrap">
                    {error && !loading && error}
                </p>
            </div>
        </div>
    );
};

export default ImageInput;
