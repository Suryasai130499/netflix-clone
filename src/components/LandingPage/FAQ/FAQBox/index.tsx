"use client";

import { useState } from "react";

import Image from "next/image";
import styles from "./index.module.css";

interface FAQ {
  title: string;
  description1: string;
  description2: string | null;
}

interface PropTypes {
  fa: FAQ;
}

const FAQBox = (props: PropTypes) => {
  const [open, setOpen] = useState(false);

  const { fa } = props;

  return (
    <div className={styles.main}>
      <div className={styles.titleButton} onClick={() => setOpen(!open)}>
        <h2 className={styles.title}>{fa.title}</h2>
        <div className={`${styles.cross} ${open ? styles.rotate : ""}`}>
          <Image src="/images/thin-cross.svg" alt="Close" fill />
        </div>
      </div>
      <div className={`${styles.content} ${open ? styles.open : ""}`}>
        <p className={styles.description}>{fa.description1}</p>
        {fa.description2 && (
          <p className={styles.description}>{fa.description2}</p>
        )}
      </div>
    </div>
  );
};

export default FAQBox;
