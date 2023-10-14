import React from "react";

// WIP
const TextInput = ({ label, error, placeholder, ...props }) => {
    return (
        <div className="flex flex-col gap-1 pt-4">
            {label && <label htmlFor={props.id}>{label}:</label>}
            <input
                type="text"
                placeholder={placeholder}
                className={`${
                    error && "ring-1 ring-red-500"
                } border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                {...props}
            />
            {error && <p className="text-red-500 pl-2 text-sm">{error}</p>}
        </div>
    );
};

export default TextInput;
