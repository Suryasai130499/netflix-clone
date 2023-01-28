import React from "react";
import styles from "./page.module.css";
import Header from "@/components/LoginPage/Header";
import SignInForm from "@/components/LoginPage/SignInForm";
import Footer from "@/components/LoginPage/Footer";

const Login = () => {
  return (
    <div className={styles.main}>
      <div className={styles.bg} />
      <Header />
      <SignInForm />
      <Footer />
    </div>
  );
};

export default Login;
