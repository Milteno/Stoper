import styles from './ButtonStoper.module.scss';

const ButtonStoper = props => {
  return (<button className={styles.button} {...props}>{props.value}</button>);
};

  export default ButtonStoper;