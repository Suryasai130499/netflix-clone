import Image from "next/image";
import styles from "./index.module.css";

interface PropTypes {
  bottom?: boolean;
}

const Register = (props: PropTypes) => {
  const { bottom } = props;
  return (
    <div className={`${styles.textSection} ${bottom ? styles.bottom : ""}`}>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className={styles.emailForm}>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.emailfield}
          placeholder={"Email address"}
        />
        <button className={styles.submit}>
          Get Started{" "}
          <span className={styles.arrow}>
            <Image src="/images/right.svg" alt=">" fill />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Register;
