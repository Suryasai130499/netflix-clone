import SignInForm from "./form";
import Header from "./header";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SignInForm />
    </main>
  );
}
