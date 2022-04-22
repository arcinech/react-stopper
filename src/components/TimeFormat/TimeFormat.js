import styles from './TimeFormat.module.scss';

const TimeFormat = ({ time }) => {
  const toForrmatedTime = () => {
    const ms = time % 1000;
    const s = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (60 * 1000)) % 60);
    const hours = Math.floor(time /(60 * 60 * 1000) % 24);
    return ( hours < 10 ? `0${hours}` :`${hours}`) 
      + ":" + 
    (minutes < 10 ? `0${minutes}` : minutes )
    + ":" + 
    (s < 10 ? `0${s}` : s) 
    + "." + 
    (ms < 100 ? `0${ms}` : (ms < 10) ? `00${ms}` : ms);
  
  }
  const converted = toForrmatedTime();
  return (
    <div className={styles.formated}>{converted}</div>
  )
}

export default TimeFormat;