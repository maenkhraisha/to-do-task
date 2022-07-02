import { useState } from 'react';

const AddTask = ({addTask}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random()*1000+1);
    if(!text){
        alert('please add text')
    }
    addTask({id,text,day,reminder})
    setText('');
    setDay('');
    setReminder(false);

  }

  return (
    <form className="add-form" onSubmit={submit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="write your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Add Day and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        type="submit"
        className="btn btn-block"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
