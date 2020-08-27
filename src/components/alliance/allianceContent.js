import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";

import AllianceHeader from "./allianceHeader";
import styles from "../../stylesheets/alliance.module.scss";
import custom from "../../stylesheets/custom-styles.module.scss";
import { Button } from "semantic-ui-react";

export default function AllianceContent() {
  const {
    alliance,
    getAlliance,
    getProfile,
    getMembers,
    getCurrentEvents,
    getPermissions,
    eventsError,
    events,
    willParticipate,
    willParticipateMessage,
  } = useContext(PlayerContext);

  useEffect(() => {
    getProfile();
    getAlliance();
    getMembers();
    getPermissions();
    getCurrentEvents();
  }, []);
  return (
    <div className={styles.wrapper}>
      <AllianceHeader />
      <div className={styles.card_wrapper}>
        {events &&
          events.map((data) => (
            <div key={data.eventId} className={styles.eventCards}>
              <div className={styles.row}>
                <h3 className={styles.title}>{data.eventName}</h3>
                <p>This event ends in {data.endDate}</p>
              </div>
              <p>{data.eventDescription}</p>
              <div className={styles.switch}>
                {data.isParticipating === null ? (
                  <Button.Group>
                    <Button
                      color="red"
                      inverted
                      onClick={() => willParticipate(0, data.eventId)}
                    >
                      Not Going
                    </Button>
                    <Button.Or />
                    <Button
                      color="blue"
                      inverted
                      onClick={() => willParticipate(1, data.eventId)}
                    >
                      Going
                    </Button>
                  </Button.Group>
                ) : data.isParticipating === 0 ? (
                  <Button.Group>
                    <Button color="red" inverted disabled active>
                      Not Going
                    </Button>
                    <Button.Or />
                    <Button
                      color="blue"
                      inverted
                      onClick={() => willParticipate(1, data.eventId)}
                    >
                      Going
                    </Button>
                  </Button.Group>
                ) : (
                  <Button.Group>
                    <Button
                      color="red"
                      inverted
                      onClick={() => willParticipate(0, data.eventId)}
                    >
                      Not Going
                    </Button>
                    <Button.Or />
                    <Button color="blue" inverted disabled>
                      Going
                    </Button>
                  </Button.Group>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
