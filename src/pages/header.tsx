import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../stylesheets/hf.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Link to="/">Ark Planner</Link>
      </div>
      <div className={styles.nav}>
        <div className={styles.content}>
          <Link to="/user">Profile</Link>
        </div>
        Sign Out
      </div>
    </div>
  );
}
