/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/images/logo.svg" alt="Logo" className={styles.icon} />
    </div>
  );
};

export default Header;
