import React from "react";
import cl from './createButton.module.css';

const CreateButton = ({children, ...props}) => {
    return (
        <div className={cl.createButtonContainer}>
            <button {...props} className={cl.createButton}>
                {children}
            </button>
        </div>
    );
};

export default CreateButton;