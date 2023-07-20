import React from "react";
import styles from "./styles.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.one}></div>
      <div className={styles.two}></div>
      <div className={styles.three}></div>
    </div>
  );
};

export default Loader;
