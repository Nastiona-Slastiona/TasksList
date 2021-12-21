import React from "react";

import './modalWindow.css';


export default function ModalWindow({children, visible, setVisible}) {
    const rootClasses = ['modal-window'];

    if (visible) {
        rootClasses.push('modal-window--active');
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={'modal-window__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};