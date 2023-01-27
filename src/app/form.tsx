import Image from "next/image";
import styles from "./form.module.css";

const SignInForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgImage}>
        <Image src="/images/bg.jpg" alt="Background" fill />
      </div>
      <div className={styles.bgGradient} />
      <div className={styles.textSection}>
        <h1>Ultimate movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
      </div>
    </div>
  );
};

export default SignInForm;
