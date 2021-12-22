import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";

import TaskList from 'Components/TaskList/taskList.jsx';
import TaskFilter from 'Components/TaskFilter/taskFilter.jsx';
import { fetchTasks, selectAllTasks } from 'Store/features/tasks/tasksSlice.jsx'
import { StatusFilter } from 'Models/StatusFilter/statusFilter.jsx';

import  './App.css';
import AddTask from 'Components/AddTask/addTask.jsx';


export default function App() {
    const tasks = useSelector(selectAllTasks);
    const filterStatus = useSelector(state => state.tasks.filter.status);
    const [filter, setFilter] = useState({selectedSort:'', searchQuery: ''});
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const setModalVisability = useCallback(() => {
        setIsModalVisible(true);
    });

    const onClose = useCallback(() => 
        setIsModalVisible(false)
    );

    const stayingVisible = useCallback(e => e.stopPropagation());

    const getVisibleTodos = useCallback((todos, taskFilter) => {
        switch (taskFilter) {
            case StatusFilter.Active:
                return todos.filter(t => !t.completed);
            case StatusFilter.Completed:
                return todos.filter(t => t.completed);
            default:
                return todos;
        }
    }, [tasks, filterStatus]);

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

    useEffect(() => { dispatch(fetchTasks()); }, [dispatch]);

    return (
    <div className="App">
        <AddTask 
            isModalVisible={isModalVisible} 
            setModalVisability={setModalVisability} 
            onClose={onClose} 
            stayingVisible={stayingVisible}/>
        <TaskFilter 
            filter={filter}
            setFilter={setFilter}  
        />
        <TaskList 
            tasks={sortedAndSearchedTasks} 
            title={'List of tasks'}/>
    </div>
    );
};
