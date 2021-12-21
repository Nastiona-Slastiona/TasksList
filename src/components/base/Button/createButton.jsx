import React from "react";

import './createButton.css';


export default function CreateButton({children, ...props}) {
    return (
        <div className={'create-button__container'}>
            <button {...props} className={'create-button'}>
                {children}
            </button>
        </div>
    );
};