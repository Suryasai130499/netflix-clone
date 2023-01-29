import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  const Items = [
    ["FAQ", "Privacy"],
    ["Help Centre", "Cookie Preferences"],
    ["Netflix Shop", "Corporate Institution"],
    ["Terms of Use"],
  ];
  return (
    <div className={styles.footer}>
      <p className={styles.topText}>
        Questions? Call <span className={styles.number}>000-800-919-1694</span>
      </p>
      <div className={styles.list}>
        {Items.map((item, index) => (
          <div key={index} className={styles.sublist}>
            {item.map((it, index) => (
              <p className={styles.listItem} key={index}>
                {it}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
