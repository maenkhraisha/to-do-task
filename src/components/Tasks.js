import Task from './Task';

const Tasks = ({ tasks, onDelete ,onUpdateReminder}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdateReminder={onUpdateReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
