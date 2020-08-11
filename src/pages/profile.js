import React from "react";

import ProfileImg from "../components/profile/profileimg";
import ProfileTroops from "../components/profile/profileTroops";

import styles from "../stylesheets/profile.module.scss";
import custom from "../stylesheets/custom-styles.module.scss";
import Navbar from "./navbar";

export default function Profile() {
  return (
    <div className={custom.wrapper}>
      <div className={custom.header}>
        <h1>Governor Profile</h1>
      </div>
      <div className={custom.body}>
        <div className={custom.content}>
          <ProfileImg />
          <ProfileTroops />
        </div>
      </div>
      <div className={styles.buttons}>
        <Navbar />
      </div>
    </div>
  );
}
