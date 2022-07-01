import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Wash the car',
      day: 'Monday 4:15 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Have Lunch',
      day: 'Friday 6:15 AM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Fuck Wife',
      day: 'Saturday 5:00 PM',
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const updateReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ?  { ...task, reminder: !task.reminder } : task
      )
    );
  tasks.map(item=>console.log(item.reminder));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onUpdateReminder={updateReminder}
        />
      ) : (
        'No tasks :('
      )}
    </div>
  );
}

export default App;
