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
    members,
  } = useContext(PlayerContext);

  useEffect(() => {
    getAlliance();
    getMembers();
    getCurrentEvents();
    console.log("rendered");
  }, [alliance.allianceId]);
  console.log("members", members);
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
        <h3>
          {members &&
            members.map((data) => (
              <div className={custom.cards} key={data.uuid}>
                <div>IMG</div>
                <div>
                  <div>{data.inGameName}</div>
                  <div>
                    {data.t3inf + data.t3cav + data.t3arch} t3 /
                    {data.t4inf + data.t4cav + data.t4arch} t4 /
                    {data.t5inf + data.t5cav + data.t5arch} t5
                  </div>
                </div>
              </div>
            ))}
        </h3>
      </div>
    </div>
  );
}
