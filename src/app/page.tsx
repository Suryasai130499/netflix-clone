import SignInForm from "./form";
import Header from "./header";
import Cards from "./cards";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SignInForm />
      <Cards />
    </main>
  );
}
