import React from "react";

import TaskForm from '../TaskForm/taskForm.jsx';
import ModalWindow from '../base/ModalWindow/modalWindow.jsx';
import CreateButton from '../base/Button/createButton.jsx';

import './addTask.css';


export default function AddTask({setModalVisability, isModalVisible, setIsModalVisible}) {
    return (
        <div>
            <CreateButton onClick={setModalVisability}>+</CreateButton>
            <ModalWindow visible={isModalVisible} setVisible={setIsModalVisible}>
            <TaskForm />
            </ModalWindow>
        </div>
    )
};