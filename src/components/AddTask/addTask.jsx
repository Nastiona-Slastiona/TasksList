import React from "react";
import PropTypes  from "prop-types";

import TaskForm from 'Components/TaskForm/taskForm.jsx';
import ModalWindow from 'Components/base/ModalWindow/modalWindow.jsx';
import CreateButton from 'Components/CreateButton/createButton.jsx';

import './addTask.css';


function AddTask({isModalVisible, setModalVisability, onClose, stayingVisible}) {
    return (
        <div>
            <CreateButton onClick={setModalVisability}>+</CreateButton>
            <ModalWindow 
                isVisible={isModalVisible} 
                onClose={onClose} 
                stayingVisible={stayingVisible}>
            <TaskForm />
            </ModalWindow>
        </div>
    )
};

AddTask.propTypes = {
    isModalVisible: PropTypes.bool,
    setModalVisability: PropTypes.func,
    onClose: PropTypes.func,
    stayingVisible: PropTypes.func
}

export default AddTask;