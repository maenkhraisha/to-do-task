import { useState, useEffect } from 'react';

import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowform] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const updateReminder = async (id) => {
    const taskToToggoleReminder = await fetchTask(id);
    const updatedTask = {
      ...taskToToggoleReminder,
      reminder: !taskToToggoleReminder.reminder,
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
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

export default App;
