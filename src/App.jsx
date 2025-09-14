import { useContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { GlobalContext } from './GlobalState';
import To_do_card from './components/To';
import AddTaskForm from './components/AddtaskFom';
import Analitic from './Analitic';
function App() {
  const [showAddForm,setShowAddForm] = useState(false)
  const { tasks, setTasks } = useContext(GlobalContext);
  const onAddTodo =()=>{
    setShowAddForm(true)
  }
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
    setShowAddForm(false);
  };
  const handleRemoveTask=(taskIndex)=>{
    const updateTasks = tasks.filter((_,index)=> index !== taskIndex);
    setTasks(updateTasks)
  }
  const handleUpdateStatus=(taskIndex,newStatus)=>{
    const updateTasks=[...tasks];
    updateTasks[taskIndex].status = newStatus;
    setTasks(updateTasks)
  }
  return (
    
    <div >
      <Navbar onAddTodo={onAddTodo}/>
      <Analitic/>
      {showAddForm && <AddTaskForm onSubmit={handleAddTask} />}
    <To_do_card tasks={tasks} removeTask={handleRemoveTask}updateTaskStatus ={handleUpdateStatus} />
    </div>
  );
}


export default App
