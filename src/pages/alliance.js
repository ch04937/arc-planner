import React, { useEffect, useContext } from "react";

import Navbar from "./navbar";
import AllianceNavLink from "../components/alliance/allianceNavLink";
import AllianceList from "../components/alliance/allianceList";

import { PlayerContext } from "../utils/context/Player/PlayerState";

import custom from "../stylesheets/custom-styles.module.scss";
import styles from "../stylesheets/profile.module.scss";

export default function IsMemberAlliance() {
  const {
    isLoading,
    applications,
    userProfile,
    getAlliance,
    getUserProfile,
    getApplications,
  } = useContext(PlayerContext);

  useEffect(() => {
    getAlliance();
    getUserProfile();
    getApplications();
  }, [applications.length]);

  return (
    <div className={custom.wrapper}>
      {userProfile.isMember ? <AllianceNavLink /> : <AllianceList />}
      <div className={styles.buttons}>
        <Navbar />
      </div>
    </div>
  );
}
