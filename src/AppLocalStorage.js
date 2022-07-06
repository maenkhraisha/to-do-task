import { useState, useEffect } from 'react';

import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

function AppLocalStorage() {
  const [showForm, setShowform] = useState(false);
  const [tasks, setTasks] = useState(getTasks());

  function getTasks() {
    const temp = localStorage.getItem("tasks")
    const savedTodos = JSON.parse(temp)
    console.log(savedTodos);
    return savedTodos || []
  }

  useEffect(() => {
    const temp = JSON.stringify(tasks);
    localStorage.setItem("tasks", temp);
  }, [tasks]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const updateReminder = (id) => {
     setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task )
    );
  };

  const addTask = (task) => {
     setTasks([...tasks, task]);
    setShowform(false);
  };

  const togol = () => {
    setShowform(!showForm);
  };

  return (
    <div className="container">
      <Header onToggol={togol} showForm={showForm} />
      {showForm && <AddTask addTask={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onUpdateReminder={updateReminder}
          />
        ) : (
          'No tasks :('
        )}

      <Footer />
    </div>
  );
}

export default AppLocalStorage;
