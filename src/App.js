import React, { useState, useMemo } from 'react';
import  './styles/App.css';
import TaskList from './components/tasks/TaskList';
import TaskForm from './components/tasks/TaskForm';
import TaskFilter from './components/TaskFilter';
import ModalWindow from './components/UI/ModalWindow/ModalWindow';
import StyledButton from './components/UI/button/StyledButton';


function App() {
  const [tasks, setTasks] = useState([
    {id:1, title: 'JavaScript1', body: 'JavaScript - programming language'},
    {id:2, title: 'JavaScript2', body: 'JavaScript - programming language'},
    {id:3, title: 'JavaScript3', body: 'JavaScript - programming language'},
  ])
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

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setModal(false);
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
  }

  return (
    <div className="App">
      <StyledButton style={{marginTop: 30}} onClick={() => setModal(true) }>Create task</StyledButton>
      <ModalWindow visible={modal} setVisible={setModal}>
        <TaskForm create={createTask}/>
      </ModalWindow>
      <hr className="separator"/>
      <TaskFilter 
        filter={filter}
        setFilter={setFilter}  
      />
      <TaskList remove={removeTask} tasks={sortedAndSearchedTasks} title={'List of tasks 1'}/>
    </div>
  );
}

export default App;
