import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import TaskList from '../TaskList/taskList.jsx';
import TaskFilter from '../TaskFilter/taskFilter.jsx';
import { fetchTasks, selectAllTasks } from '../../store/features/tasks/tasksSlice.jsx'

import  './App.css';
import AddTask from '../AddTask/addTask.jsx';


export default function App() {
    const tasks = useSelector(selectAllTasks);
    const filterStatus = useSelector(state => state.tasks.filter.status);
    const [filter, setFilter] = useState({selectedSort:'', searchQuery: ''});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();

    const getVisibleTodos = useCallback((todos, taskFilter) => {
        switch (taskFilter) {
            case 'active':
                return todos.filter(t => !t.completed);
            case 'completed':
                return todos.filter(t => t.completed);
            default:
                return todos;
        }
    },[tasks, filterStatus]);

    const visibleTodos = getVisibleTodos(tasks, filterStatus);

    const sortedTasks = useMemo(() => {
        if (filter.selectedSort) {
            return [...visibleTodos].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]));
        }

        return visibleTodos;
    },  [filter.selectedSort, visibleTodos]);

    const sortedAndSearchedTasks = useMemo(() => {
        return sortedTasks
            .filter(task => task.title
            .toLowerCase()
            .includes(filter.searchQuery.toLowerCase()));
    }, [filter.searchQuery, sortedTasks]);

    const setModalVisability = useCallback(() => {
        setIsModalVisible(true);
    });

    useEffect(() => { dispatch(fetchTasks()); }, [dispatch]);

    return (
    <div className="App">
        <AddTask isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} setModalVisability={setModalVisability}/>
        <TaskFilter 
            filter={filter}
            setFilter={setFilter}  
        />
        <TaskList tasks={sortedAndSearchedTasks} title={'List of tasks'}/>
    </div>
    );
};
