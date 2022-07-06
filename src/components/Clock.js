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
        hour: String(date.getHours()).padStart(2, '0'),
        minute: String(date.getMinutes()).padStart(2, '0'),
        second :String(date.getSeconds()).padStart(2, '0')
      };
    setTime(timeObj);
  }, 1000);

  return (
  <>
  <p className='clock'>{time.hour+" : "+time.minute+" : "+time.second}</p>
  </>);
};

export default Clock;
