import React, { useContext } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";
import CreateEvent from "./createEvents";

import styles from "../../stylesheets/alliance.module.scss";
export default function Events() {
  const {
    events,
    deleteEvent,
    permissions,
    eventCreatedMessageError,
    eventCreatedMessage,
  } = useContext(PlayerContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card_wrapper}>
        <CreateEvent />
        <p>{eventCreatedMessageError}</p>
        <p>{eventCreatedMessage}</p>
        {permissions.isLead ? (
          <div>
            <p
              className={styles.delete}
              onClick={() => deleteEvent(events.eventsId)}
            >
              delete
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
