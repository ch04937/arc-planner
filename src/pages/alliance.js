import React, { useEffect, useContext } from "react";

import Navbar from "./navbar";
import AllianceNavLink from "../components/alliance/allianceNavLink";
import AllianceList from "../components/alliance/allianceList";

import { PlayerContext } from "../utils/context/Player/PlayerState";

import custom from "../stylesheets/custom-styles.module.scss";
import styles from "../stylesheets/profile.module.scss";

export default function IsMemberAlliance() {
  const { userProfile, getUserProfile } = useContext(PlayerContext);

  useEffect(() => {
    getUserProfile();
  }, [userProfile && userProfile.isMember]);
  return (
    <div className={custom.wrapper}>
      {userProfile.isMember && userProfile.isMember ? (
        <AllianceNavLink />
      ) : (
        <AllianceList />
      )}
      <div className={styles.buttons}>
        <Navbar />
      </div>
    </div>
  );
}
