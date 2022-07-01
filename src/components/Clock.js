import {  useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState({
    hour:0,
    minute:0,
    second:0
  });
  
 
 setInterval(() => {
    let date = new Date();
    let timeObj = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second :date.getSeconds()
      };
    setTime(timeObj);
  }, 1000);

  return (
  <>
  <p>{time.hour+":"+time.minute+":"+time.second}</p>
  </>);
};

export default Clock;
