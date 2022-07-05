import Task from './Task';

const Tasks = ({ tasks, onDelete ,onUpdateReminder}) => {
  return (
    <>
      {tasks.map((task,index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onUpdateReminder={onUpdateReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
