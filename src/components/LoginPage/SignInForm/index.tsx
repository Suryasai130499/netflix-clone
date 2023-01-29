import React, { FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setUser, setPassword } from '@/redux/actions/authActions';
import styles from './index.module.css';

const SignInForm = () => {
  const user = useAppSelector((state) => state.auth.user);
  const password = useAppSelector((state) => state.auth.password);
  const dispatch = useAppDispatch();

  const handleUserInput = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch(setUser(target.value));
  };

  const handlePasswordInput = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch(setPassword(target.value));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Sign In</h1>
      <input
        value={user}
        type="text"
        placeholder="Email or phone number"
        className={styles.text}
        onInput={handleUserInput}
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        className={styles.password}
        onInput={handlePasswordInput}
      />
      <button type="submit">Sign In</button>
      <div className={styles.help}>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="Remember"
            id="Remember"
          />
          <label htmlFor="Remember">Remember me</label>
        </div>
        <p className={styles.needHelp}>Need help?</p>
      </div>
      <p className={styles.new}>
        New to NetFlix? <a href="#">Sign up now</a>
      </p>
    </div>
  );
};

export default SignInForm;
