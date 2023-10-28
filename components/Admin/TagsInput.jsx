import React from "react";

const TagsInput = ({
    label,
    error,
    helper,
    loading,
    placeholder,
    tags,
    setTags,
    ...props
}) => {
    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const inputValue = event.target.value.trim();
            if (inputValue === "") {
                return;
            }
            setTags((prevItems) => {
                const newItems = new Set(prevItems);
                const tags = inputValue
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter((tag) => tag !== "");
                tags.forEach((tag) => newItems.add(tag));
                event.target.value = "";
                return newItems;
            });
        }
    };

    const handleDelete = (value) => {
        setTags((prevItems) => {
            const newItems = new Set(prevItems);
            newItems.delete(value);
            return newItems;
        });
    };

    return (
        <div className="text-md flex flex-col gap-1 ">
            {/* Store the tags as an array in a hidden Input so it will be submitted to the form */}
            <input type="hidden" value={JSON.stringify(tags)} {...props} />
            {/* Label */}

            {/* Label */}
            {label && <label htmlFor={props.name}>{label}</label>}

            {/* Input */}
            <input
                onKeyDown={handleEnter}
                disabled={loading}
                type="text"
                placeholder={placeholder}
                className={`${
                    error && !loading && "ring-1 ring-red-500"
                } border overflow-y-hidden resize-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />

            {/* Tags */}
            <div
                className={`${
                    error && !loading && "ring-1 ring-red-500"
                } border flex flex-wrap gap-1 overflow-y-hidden resize-none rounded-md px-4 py-2`}
            >
                {tags && tags.length > 0 ? (
                    tags.map((value, idx) => (
                        // Tag
                        <div key={idx} className="flex gap-2">
                            <div className="bg-gray-100 rounded-full pl-3 pr-2 py-1 text-gray-500 text-sm whitespace-nowrap">
                                {value}

                                {/* X button */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5 inline-block ml-1 cursor-pointer hover:bg-gray-200 bg-gray-300 rounded-full p-[2.5px] transition-all duration-200"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    onClick={() => handleDelete(value)}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 5 L15 15 M5 15 L15 5"
                                        clipRule="evenodd"
                                        strokeWidth={2}
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="bg-white flex-1 text-left text-gray-400 italic pl-1 text-md whitespace-nowrap">
                        Hit enter to add a tag.
                    </p>
                )}
            </div>

            <div className="flex justify-between">
                {/* Helper text */}
                <p className="bg-white h-6 flex-1 text-left text-gray-500 pl-2 text-sm whitespace-nowrap">
                    {helper}
                </p>

                {/* Error */}
                <p className="bg-white h-6 flex-1 text-right text-red-500 pl-2 text-sm whitespace-nowrap">
                    {error && !loading && error}
                </p>
            </div>
        </div>
    );
};

export default TagsInput;
