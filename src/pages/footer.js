import React from "react";

import styles from "../stylesheets/hf.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div>Ark Planner © {new Date().getFullYear()} </div>
    </div>
  );
}
