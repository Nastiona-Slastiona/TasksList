import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from 'components/AddTask/addTask';
import TaskFilter from 'components/TaskFilter/taskFilter';
import TaskList from 'components/TaskList/taskList';
import StatusFilter from 'models/statusFilter';
import { fetchTasks } from 'store/tasks/state/thunks/thunks';
import { selectAllTasks } from 'store/tasks/tasksSlice';

import './App.css';


export default function App() {
    const tasks = useSelector(selectAllTasks);
    const filterStatus = useSelector(state => state.tasks.filter.status);
    const [filter, setFilter] = useState({ selectedSort: '', searchQuery: '' });
    const dispatch = useDispatch();

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
    }, [filter.selectedSort, visibleTodos]);

    const sortedAndSearchedTasks = useMemo(() => {
        return sortedTasks
            .filter(task => task.title
                .toLowerCase()
                .includes(filter.searchQuery.toLowerCase()));
    }, [filter.searchQuery, sortedTasks]);

    useEffect(() => { dispatch(fetchTasks()); }, [dispatch]);

    return (
        <div className="App">
            <AddTask />
            <TaskFilter
                filter={filter}
                setFilter={setFilter}
            />
            <TaskList
                tasks={sortedAndSearchedTasks}
                title="List of tasks"
            />
        </div>
    );
}
