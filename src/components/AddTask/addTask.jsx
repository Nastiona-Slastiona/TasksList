import React, { useCallback, useState } from 'react';
import ModalWindow from 'components/base/ModalWindow/modalWindow';
import CreateButton from 'components/CreateButton/createButton';
import TaskForm from 'components/TaskForm/taskForm';


export default function AddTask() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const setModalVisability = useCallback(() => {
        setIsModalVisible(true);
    });

    const onClose = useCallback(() => setIsModalVisible(false));

    const onModalClick = useCallback(e => e.stopPropagation());

    return (
        <div>
            <CreateButton onClick={setModalVisability} />
            <ModalWindow
                isVisible={isModalVisible}
                onClose={onClose}
                onModalClick={onModalClick}
            >
                <TaskForm />
            </ModalWindow>
        </div>
    );
}
