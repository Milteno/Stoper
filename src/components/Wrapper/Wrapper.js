import styles from './Wrapper.module.scss';

const Wrapper = props => {
  return (
    <div className={styles.wrapper}>
      <main className={styles['stoper-wrapper']}>
        {props.children}
      </main>
    </div>
  );
};

export default Wrapper;