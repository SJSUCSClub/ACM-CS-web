import React from "react";

const Dropdown = ({ label, error, loading, options, ...props }) => {
    return (
        <div className="text-md flex flex-col gap-1 ">
            {/* Label */}
            {label && <label htmlFor={props.name}>{label}</label>}

            {/* Dropdown */}
            <select
                disabled={loading}
                className={`${
                    error && !loading && "ring-1 ring-red-500"
                } border rounded-md  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                {...props}
            >
                {options.map((option, idx) => (
                    <option key={idx} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/* Error */}
            <p className="h-4 w-full text-right text-red-500 pl-2 text-sm whitespace-nowrap">
                {error && !loading && error}
            </p>
        </div>
    );
};

export default Dropdown;
