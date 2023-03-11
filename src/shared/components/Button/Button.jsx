import styles from './Button.module.css';

function Button({ onSubmit }) {
  return (
    <>
      <button className={styles.button} type="submit">
        {onSubmit}
      </button>
    </>
  );
}

export default Button;
