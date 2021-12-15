import React from "react";
import classStyle from './modalWindow.module.css';

const ModalWindow = ({children, visible, setVisible}) => {
    const rootClasses = [classStyle.modalWindow];

    if(visible) {
        rootClasses.push(classStyle.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classStyle.modalWindowContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;