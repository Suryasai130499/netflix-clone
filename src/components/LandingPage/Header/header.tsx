import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <Image src="/images/logo.svg" alt="LOGO" className={styles.icon} fill />
      </div>
      <button className={styles.signIn}>Sign In</button>
    </div>
  );
};

export default Header;
