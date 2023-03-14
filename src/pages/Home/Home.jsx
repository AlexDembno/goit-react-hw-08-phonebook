import styles from './Home.module.css';

function Home() {
  const str = 'Phonebook';
  const arr = str.split('').map((el, i) => (
    <li className={styles.item} key={i}>
      <p className={styles.text}>{el}</p>
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>{arr}</ul>
    </div>
  );
}

export default Home;
