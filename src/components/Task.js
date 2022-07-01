import { FaTimes } from 'react-icons/fa';

const task = ({ task, onDelete,onUpdateReminder }) => {


  return (
    <div className={`task  ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onUpdateReminder(task.id)}>
      <h3 >
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={()=>onDelete(task.id)}
        />
      </h3>
      <h4>{task.day}</h4>
    </div>
  );
};

export default task;
