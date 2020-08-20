import React, { useContext, useEffect, useState } from "react";

import TroopBtns from "./troopBtns";

import { PlayerContext } from "../../utils/context/Player/PlayerState";

import styles from "../../stylesheets/profile.module.scss";

export default function ProfileTroops() {
  const { profile, getProfile } = useContext(PlayerContext);

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className={styles.t_wrapper}>
      <div className={styles.t_troops}>
        <div className={styles.t_content}>TIER 3 ARCHER:</div>
        <div className={styles.t_content}>
          <TroopBtns type="t3arch" counts={profile.t3arch} />
        </div>
      </div>
      <div className={styles.t_troops}>
        <div className={styles.t_content}>TIER 3 INFANTRIES:</div>
        <div className={styles.t_content}>
          <TroopBtns type="t3inf" counts={profile.t3inf} />
        </div>
      </div>
      <div className={styles.t_troops}>
        <div className={styles.t_content}>TIER 3 CAVALRY:</div>
        <div className={styles.t_content}>
          <TroopBtns type="t3cav" counts={profile.t3cav} />
        </div>
      </div>
      <div className={styles.t_troops}>
        <div className={styles.t_content}>TIER 4 ARCHER:</div>
        <div className={styles.t_content}>
          <TroopBtns type="t4arch" counts={profile.t4arch} />
        </div>
      </div>
      <div className={styles.t_troops}>
        <div className={styles.t_content}>TIER 4 INFANTRIES:</div>
        <div className={styles.t_content}>
          <TroopBtns type="t4inf" counts={profile.t4inf} />
        </div>
      </div>
      <div className={styles.t_troops}>
        <div className={styles.t_content}>TIER 4 CAVALRY:</div>
        <div className={styles.t_content}>
          <TroopBtns type="t4cav" counts={profile.t4cav} />
        </div>
      </div>
      <div className={styles.t_troops}>
        <div className={styles.t_content}>TIER 5 ARCHER:</div>
        <div className={styles.t_content}>
          <TroopBtns type="t5arch" counts={profile.t5arch} />
        </div>
      </div>
      <div className={styles.t_troops}>
        <div className={styles.t_content}>TIER 5 INFANTRIES:</div>
        <div className={styles.t_content}>
          <TroopBtns type="t5inf" counts={profile.t5inf} />
        </div>
      </div>
      <div className={styles.t_troops}>
        <div className={styles.t_content}>TIER 5 CAVALRY:</div>
        <div className={styles.t_content}>
          <TroopBtns type="t5cav" counts={profile.t5cav} />
        </div>
      </div>
    </div>
  );
}
