import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  const Items = [
    ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
    ["HelpCenter", "Jobs", "Cookie Preferences", "Legal Notices"],
    ["Account", "Ways to Watch", "Corporate Information", "Only On Netflix"],
    ["Media Centre", "Terms of Use", "COntact Us"],
  ];
  return (
    <div className={styles.footer}>
      <p className={styles.topWord}>
        Questions? Call <span className={styles.number}>000-800-919-1694</span>
      </p>
      <ul className={styles.list}>
        {Items.map((item, index) => (
          <li key={index}>
            <ul className={styles.sublist}>
              {item.map((it, index) => (
                <li className={styles.listItem} key={index}>
                  {it}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className={styles.bottomWord}>Netflix</p>
    </div>
  );
};

export default Footer;
