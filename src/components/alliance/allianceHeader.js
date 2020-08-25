import React, { useContext } from "react";

import styles from "../../stylesheets/alliance.module.scss";
import { PlayerContext } from "../../utils/context/Player/PlayerState";

export default function AllianceHeader() {
  const { alliance } = useContext(PlayerContext);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.info}>
          <h1>{`[${alliance.allianceTag}] ${alliance.allianceName}`}</h1>
          <p>{`Alliance Leader: ${
            alliance.inGameName ? alliance.inGameName : "???"
          }`}</p>
          <p>{`Members: ${alliance.count}`}</p>
        </div>
        <div className={styles.messageBoard}>{alliance.messageBoard}</div>
      </div>
    </div>
  );
}
