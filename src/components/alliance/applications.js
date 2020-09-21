import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";

import styles from "../../stylesheets/alliance.module.scss";
import { Button } from "semantic-ui-react";

export default function Applications() {
  const { getApps, listApps } = useContext(PlayerContext);
  useEffect(() => {
    getApps();
  }, []);
  console.log("listApps", listApps);
  return (
    <div className={styles.a_wrapper}>
      <h2>Applications</h2>
      <div>
        {listApps &&
          listApps.map((data, idx) => (
            <div className={styles.applicant} key={data.uuid}>
              <div className={styles.img}>
                {idx + 1}.
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/${
                    data.path && data.path.replace("\\", "/")
                  }`}
                  alt="profile-picture"
                />
                {data.inGameName}
              </div>
              <div className={styles.btn}>
                <Button color="red" size="tiny">
                  Decline
                </Button>
              </div>
              <div className={styles.btn}>
                <Button color="green" size="tiny">
                  Accept
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
