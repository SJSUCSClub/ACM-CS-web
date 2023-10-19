import React from "react";

const TextInput = ({
    fullHeight,
    label,
    error,
    loading,
    placeholder,
    ...props
}) => {
    const textareaRef = React.useRef(null);

    const handleInput = () => {
        if (textareaRef.current) {
            // Reset the height to its default to get an accurate scrollHeight
            textareaRef.current.style.height = "inherit";

            // Set the height to the scrollHeight (which includes the full content, even if out of view)
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    React.useEffect(() => {
        handleInput(); // Initial adjustment if the textarea has default content
    }, []);

    return (
        <div className="text-md flex flex-col gap-1 ">
            {/* Label */}
            {label && <label htmlFor={props.name}>{label}</label>}

            {/* Input */}
            {!fullHeight && (
                <input
                    disabled={loading}
                    type="text"
                    placeholder={placeholder}
                    className={`${
                        error && !loading && "ring-1 ring-red-500"
                    } border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    {...props}
                />
            )}

            {/* Full Height Input */}
            {fullHeight && (
                <textarea
                    ref={textareaRef}
                    onInput={handleInput}
                    disabled={loading}
                    type="text"
                    placeholder={placeholder}
                    className={`${
                        error && !loading && "ring-1 ring-red-500"
                    } border overflow-y-hidden resize-none rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                    {...props}
                />
            )}

            {/* Error */}
            <p className="h-4 w-full text-right text-red-500 pl-2 text-sm whitespace-nowrap">
                {error && !loading && error}
            </p>
        </div>
    );
};

export default TextInput;
