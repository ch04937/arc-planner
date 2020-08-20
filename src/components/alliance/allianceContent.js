import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";

import styles from "../../stylesheets/alliance.module.scss";
import custom from "../../stylesheets/custom-styles.module.scss";

export default function AllianceContent() {
  const {
    alliance,
    getAlliance,
    getMembers,
    getCurrentEvents,
    events,
    eventsError,
  } = useContext(PlayerContext);

  useEffect(() => {
    getAlliance();
    getMembers();
    getCurrentEvents();
    console.log("rendered");
  }, [alliance.allianceId]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h1>{`[${alliance.allianceTag}] ${alliance.allianceName}`}</h1>
          <p>{`Alliance Leader: ${
            alliance.inGameName ? alliance.inGameName : ""
          }`}</p>
          <p>{`Members: ${alliance.count}`}</p>
        </div>
        <div className={styles.messageBoard}>{alliance.messageBoard}</div>
      </div>
      <div className={styles.card_wrapper}>
        {eventsError ? (
          <div className={styles.no_events}>{eventsError}</div>
        ) : (
          <>
            <h3> Event Card </h3>
            <p> Event Name </p>
            <p> Event Date </p>
            <p> how many are participating </p>
          </>
        )}
      </div>
      <div>
        <h3>all Members</h3>
      </div>
    </div>
  );
}
