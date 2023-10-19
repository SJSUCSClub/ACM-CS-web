import React from "react";

export const Form = ({ onSubmit, loading, formError, children, ...props }) => {
    return (
        <form noValidate onSubmit={onSubmit} {...props}>
            <section className="w-full flex flex-col gap-8 px-8">
                {children}

                {/* Error */}
                {formError && (
                    <section>
                        <div className="bg-red-100 border-red-500 text-red-500 border-[1px] rounded-xl p-8 overflow-hidden">
                            {formError}
                        </div>
                    </section>
                )}

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`${
                        loading &&
                        "bg-gray-100 hover:bg-gray-100 text-gray-400 border-[1px] shadow-none"
                    } text-lg bg-blue-500 hover:bg-blue-700 text-white  py-2 px-6 rounded-lg shadow-lg`}
                >
                    {loading && (
                        <svg
                            aria-hidden="true"
                            role="status"
                            class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-300"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="#9ca3af"
                            />
                        </svg>
                    )}
                    Submit
                </button>
            </section>
        </form>
    );
};

export const FormHeader = ({ children }) => {
    return (
        <div>
            <fieldset>{children}</fieldset>
        </div>
    );
};

export const FormTitle = ({ children }) => {
    return (
        <legend className="text-4xl font-extrabold drop-shadow-lg tracking-tight pb-4">
            {children}
        </legend>
    );
};

export const FormDescription = ({ children }) => {
    return <h2 className="text-lg text-gray-500 drop-shadow-lg">{children}</h2>;
};

export const FormSection = ({ children }) => {
    return (
        <section>
            <div className="bg-white border-[1px] rounded-xl p-8 overflow-hidden">
                {children}
            </div>
        </section>
    );
};

export const FormSectionTitle = ({ children }) => {
    return (
        <fieldset>
            <legend className="text-xl font-bold  pb-4">{children}</legend>
        </fieldset>
    );
};
