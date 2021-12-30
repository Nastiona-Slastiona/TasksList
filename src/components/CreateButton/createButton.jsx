import React from 'react';

import './createButton.css';


export default function CreateButton({ ...props }) {
    return (
        <div className="create-button__container">
            <button {...props} className="create-button">
                +
            </button>
        </div>
    );
}
