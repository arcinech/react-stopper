import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import TimeFormat from '../TimeFormat/TimeFormat';
import styles from './Stopper.module.scss';

const Stopper = () => {

  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);


  const stop = () => {
    setIsActive(false);
  }

  
  const reset = () => {
    setIsActive(false);
    setTime(0);
  }
  
  const start = () => {setIsActive(true)};
  useEffect(() => {
    let timer = '';
      if(isActive){
        timer = setInterval(() => setTime(prevTime => prevTime + 1), 1);
      }
    return () => {
        clearInterval(timer);
    }

  }, [isActive]);


  return (
  <div className={styles.container}>
    <div>
      <TimeFormat time={time} />
    </div>
    <div className={styles.control}>
      <Button onClick={start} >Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  </div>
  );
};

export default Stopper;