import React from "react";
import { Link } from "react-router-dom";

import styles from "../stylesheets/profile.module.scss";

export default function Navbar() {
  return (
    <div className={styles.btns}>
      <Link to="/user">Governor</Link>
      <Link to="/alliance">Alliance</Link>
    </div>
  );
}
