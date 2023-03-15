import styles from './Input.module.css';

function Input({ ...props }) {
  return (
    <>
      <input
        type={props.type}
        className={styles.input}
        name={props.name}
        value={props.value}
        required
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}

export default Input;
