import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";

import styles from "../../stylesheets/alliance.module.scss";
import custom from "../../stylesheets/custom-styles.module.scss";

export default function AllianceContent() {
  const {
    alliance,
    getAlliance,
    getProfile,
    getMembers,
    getCurrentEvents,
    events,
    eventsError,
    members,
    profile,
  } = useContext(PlayerContext);
  const t3 = profile.t3arch + profile.t3inf + profile.t3cav;
  const t4 = profile.t4arch + profile.t4inf + profile.t4cav;
  const t5 = profile.t5arch + profile.t5inf + profile.t5cav;
  useEffect(() => {
    getProfile();
    getAlliance();
    getMembers();
    getCurrentEvents();
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
      {members &&
        members.map((data) => (
          <div className={styles.cards} key={data.uuid}>
            <div className={styles.card}>
              <div>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/${
                    data.path && data.path.replace("\\", "/")
                  }`}
                />
              </div>
              <div className={styles.card_content}>
                <div className={styles.gov_name}>{data.inGameName}</div>
                <div className={styles.bar}>
                  <div
                    className={styles.t}
                    style={
                      (t3 * 100) / (t3 + t4 + t5)
                        ? {
                            width: `${(t3 * 100) / (t3 + t4 + t5)}%`,
                            background: "rgb(55 181 254)",
                          }
                        : {
                            display: "none",
                          }
                    }
                  >
                    {t3} t3
                  </div>
                  <div
                    className={styles.t}
                    style={
                      (t4 * 100) / (t3 + t4 + t5)
                        ? {
                            width: `${(t4 * 100) / (t3 + t4 + t5)}%`,
                            background: "rgb(127 47 168)",
                          }
                        : {
                            display: "none",
                          }
                    }
                  >
                    {t4} t4
                  </div>
                  <div
                    className={styles.t}
                    style={
                      (t5 * 100) / (t3 + t4 + t5)
                        ? {
                            width: `${(t5 * 100) / (t3 + t4 + t5)}%`,
                            background: "#FFA500",
                          }
                        : {
                            display: "none",
                          }
                    }
                  >
                    {t5} t5
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
