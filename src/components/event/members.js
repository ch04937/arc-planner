import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";
import styles from "../../stylesheets/alliance.module.scss";

export default function Members() {
  const { members, getMembers } = useContext(PlayerContext);

  useEffect(() => {
    getMembers();
  }, [members.length]);
  return (
    <div className={styles.m_wrapper}>
      <h2>Members</h2>
      {members &&
        members.map((data) => (
          <div className={styles.cards} key={data.uuid}>
            <div className={styles.card}>
              <div>
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/${
                    data.path && data.path.replace("\\", "/")
                  }`}
                  alt="profile-picture"
                />
              </div>
              <div className={styles.card_content}>
                <div className={styles.gov_name}>{data.inGameName}</div>
                <div className={styles.t}>
                  t3: {data.t3arch + data.t3inf + data.t3cav}
                </div>
                <div className={styles.t}>
                  t4: {data.t4arch + data.t4inf + data.t4cav}
                </div>
                <div className={styles.t}>
                  t5: {data.t5arch + data.t5inf + data.t5cav}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
