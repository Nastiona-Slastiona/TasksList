import React, { useState, useMemo } from 'react';
import  './styles/App.css';
import TaskList from './components/TaskList/taskList.js';
import TaskForm from './components/TaskForm/taskForm.js';
import TaskFilter from './components/TaskFilter/taskFilter.js';
import ModalWindow from './components/UI/ModalWindow/modalWindow.js';
import StyledButton from './components/UI/Button/styledButton.js';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks, selectAllTasks } from './features/Tasks/tasksSlice.js'

function App() {
  const tasks = useSelector(selectAllTasks);
  const filterStatus = useSelector(state => state.tasks.filter.status);
  const {status, error} = useSelector(state => state.tasks);
  const [filter, setFilter] = useState({selectedSort:'', searchQuery: ''});
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const getVisibleTodos = (todos, taskFilter) => {
    switch(taskFilter) {
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
  };
  
  const visibleTodos = getVisibleTodos(tasks, filterStatus);

  const sortedTasks = useMemo(() => {
      console.log('GET SORTED TASKS');
      if(filter.selectedSort) {
        return [...visibleTodos].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]));
      }
      return visibleTodos;
  },  [filter.selectedSort,visibleTodos]);

  const sortedAndSearchedTasks = useMemo(() => {
    return sortedTasks
      .filter(task => task.title
        .toLowerCase()
        .includes(filter.searchQuery.toLowerCase()));
  }, [filter.searchQuery, sortedTasks]);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="App">
      <StyledButton style={{marginTop: 30}} onClick={() => setModal(true) }>Create task</StyledButton>
      <ModalWindow visible={modal} setVisible={setModal}>
        <TaskForm />
      </ModalWindow>
      <hr className="separator"/>
      <TaskFilter 
        filter={filter}
        setFilter={setFilter}  
      />
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TaskList tasks={sortedAndSearchedTasks} title={'List of tasks'}/>
    </div>
  );
}

export default App;
