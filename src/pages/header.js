import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { checkAuth } from "../utils/localStorage";

import { AuthContext } from "../utils/context/Auth/AuthState";

import styles from "../stylesheets/hf.module.scss";

export default function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <div className={styles.header}>
      <div>
        <Link to="/">Ark Planner</Link>
      </div>
      {checkAuth() ? (
        <div className={styles.nav}>
          <div className={styles.content}>
            <Link to="/user">Profile</Link>
          </div>
          <div onClick={() => signOut()} className={styles.content}>
            Sign Out
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
