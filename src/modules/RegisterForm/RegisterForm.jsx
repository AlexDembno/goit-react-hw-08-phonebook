import styles from './RegisterForm.module.css';

function RegisterForm() {
  return (
    <form>
      <label htmlFor="">
        <input
          type="text"
          className={styles.input}
          name="name"
          //   value={name}
          required
          placeholder="Enter name"
          //   onChange={handleChangeInput}
        />
      </label>
      <label htmlFor="">
        <input
          type="email"
          className={styles.input}
          name="email"
          //   value={name}
          required
          placeholder="Enter email"
          //   onChange={handleChangeInput}
        />
      </label>
      <label htmlFor="">
        <input
          type="password"
          className={styles.input}
          name="password"
          //   value={name}
          required
          placeholder="Enter password"
          //   onChange={handleChangeInput}
        />
      </label>
    </form>
  );
}

export default RegisterForm;
