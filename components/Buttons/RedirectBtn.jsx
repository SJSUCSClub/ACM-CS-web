import React from "react";

/* 
    This component is a button that redirects to a different page.
    It doesn't open a new tab.
*/
const RedirectBtn = ({ url, text }) => {
    return (
        <div>
            <a
                href={url}
                className={`bg-blue-500 hover:bg-blue-700 text-white  py-4 px-6 rounded-lg shadow-lg`}
            >
                {text}
            </a>
        </div>
    );
};

export default RedirectBtn;
