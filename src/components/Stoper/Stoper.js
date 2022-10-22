import styles from './Stoper.module.scss';
import ButtonStoper from '../ButtonStoper/ButtonStoper'
import { useState, useEffect } from 'react';

const Stoper = props => {

  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {

    const count = setInterval(() => {
      if(running) {
      setTimer((old) => {
         return old+10;
        })
      }
      else if(!running) {
        clearInterval(count);
      }
    },10)
    return () => {
      clearInterval(count);
    }
  },[running] )


  return (
    <>
      <div className={styles.counterWrapper}>
        <div className={styles.stoperWrapper}>
          <span>{("0" + Math.floor((timer / 3600000) % 24)).slice(-2)}:</span>
          <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>
        </div>
        <ButtonStoper value={'start'} onClick={() => setRunning(true)}/>
        <ButtonStoper value={'stop'} onClick={() => setRunning(false)}/>
        <ButtonStoper value={'reset'} onClick={() => setTimer(0)}/>
      </div>
    </>
  );
};

export default Stoper;