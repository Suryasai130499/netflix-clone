import React from "react";
import styles from "./index.module.css";

const SignInForm = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Email or phone number"
        className={styles.text}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.password}
      />
      <button type="submit">Sign In</button>
      <div className={styles.help}>
        <div className={styles.checkbox}>
          <input type="checkbox" name="Remember" id="Remember" />
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
