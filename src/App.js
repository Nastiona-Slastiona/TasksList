import React, { useState, useMemo } from 'react';
import  './styles/App.css';
import TaskList from './components/tasks/TaskList';
import TaskForm from './components/tasks/TaskForm';
import TaskFilter from './components/tasks/TaskFilter';
import ModalWindow from './components/UI/ModalWindow/ModalWindow';
import StyledButton from './components/UI/button/StyledButton';
import { useSelector } from "react-redux";


function App() {
  const tasks = useSelector(state => state.tasks.toDoActions);
  const [filter, setFilter] = useState({selectedSort:'', searchQuery: ''});
  const [modal, setModal] = useState(false);

  const sortedTasks = useMemo(() => {
      console.log('GET SORTED TASKS');
      if(filter.selectedSort) {
        return [...tasks].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]));
      }
      return tasks;
  },  [filter.selectedSort, tasks]);

  const sortedAndSearchedTasks = useMemo(() => {
    return sortedTasks.filter(task => task.title.toLowerCase().includes(filter.searchQuery.toLowerCase()));
  }, [filter.searchQuery, sortedTasks]);

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
      <TaskList tasks={sortedAndSearchedTasks} title={'List of tasks'}/>
    </div>
  );
}

export default App;
