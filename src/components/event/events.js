import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../utils/context/Player/PlayerState";
import CreateEvent from "./createEvents";

import styles from "../../stylesheets/alliance.module.scss";
import custom from "../../stylesheets/custom-styles.module.scss";

import { Accordion, Button, Icon } from "semantic-ui-react";
import EventParticipants from "./eventParticipants";
import Drag from "./drag";

export default function Events() {
  const {
    eventsList,
    getAllEvents,
    deleteEvent,
    getEvent,
    participants,
    eventsError,
    teams,
  } = useContext(PlayerContext);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getAllEvents();
  }, []);

  function handleClick(e, { index }) {
    setActiveIndex(index);
    getEvent(index);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.card_wrapper}>
        <CreateEvent />
        {eventsError ? (
          <div className={styles.no_events}>{eventsError}</div>
        ) : (
          ""
        )}
        {eventsList &&
          eventsList.map((data) => (
            <div key={data.eventId} className={styles.eventCards}>
              <Accordion fluid>
                <Accordion.Title
                  active={activeIndex === data.eventId}
                  index={data.eventId}
                  onClick={handleClick}
                >
                  <div className={styles.event_header}>
                    <Icon name="dropdown" />
                    <div className={styles.title}>
                      <h3>{data.eventName}</h3>
                      <div className={styles.row}>
                        <p>This event ends in {data.endDate}</p>
                      </div>
                    </div>
                  </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === data.eventId}>
                  <p>{data.eventDescription}</p>
                  {/* <EventParticipants participants={participants} /> */}
                  {/* {teams &&
                    teams.map((data) => (
                      <div key={data.teamId}>
                        <h1>{data.teamName}</h1>
                      </div>
                    ))} */}
                  <Drag teams={teams} participants={participants} />
                </Accordion.Content>
                <div className={styles.delete_btn}>
                  <Button color="red" onClick={() => deleteEvent(data.eventId)}>
                    Delete
                  </Button>
                </div>
              </Accordion>
            </div>
          ))}
      </div>
    </div>
  );
}
