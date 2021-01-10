import React, { useContext, useEffect, useState } from 'react';
import { Accordion, Button, Icon } from 'semantic-ui-react';
// import { PlayerContext } from '../../utils/PlayerContext/PlayerState';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import CreateEvent from './createEvents';
import CreateTeam from './createTeam';
import Item from './dragable/Item';
import DropWrapper from './dragable/dropWrapper';
import Col from './dragable/col';

import styles from '../../stylesheets/alliance.module.scss';
import custom from '../../stylesheets/custom-styles.module.scss';
import './dragable/styles.css';

export default function Events() {
  // const {
  //   eventsList,
  //   getAllEvents,
  //   deleteEvent,
  //   getEvent,
  //   eventsError,
  //   participants,
  //   teams,
  //   updateTeams,
  // } = useContext(PlayerContext);

  const [activeIndex, setActiveIndex] = useState(0);
  // const [items, setItems] = useState(participants);

  // useEffect(() => {
  //   getAllEvents();
  //   setItems(participants);
  // }, [participants]);

  // function handleClick(e, { index }) {
  //   setActiveIndex(index);
  //   getEvent(index);
  // }

  // const onDrop = (item, monitor, teamId) => {
  //   const mapping = teams.find((si) => si.teamId === teamId);
  //   setItems((prevState) => {
  //     const newItems = prevState
  //       .filter((i) => i.teamId !== item.teamId)
  //       .concat({ ...item, ...mapping });
  //     return [...newItems];
  //   });
  //   const old = {
  //     allianceId: item.allianceId,
  //     eventId: item.eventId,
  //     profileId: item.profileId,
  //     teamId: item.teamId,
  //   };
  //   updateTeams(old, { ...mapping, profileId: item.profileId });
  // };
  // const moveItem = (dragIndex, hoverIndex) => {
  //   const item = items[dragIndex];
  //   setItems((prevState) => {
  //     const newItems = prevState.filter((i, idx) => idx !== dragIndex);
  //     newItems.splice(hoverIndex, 0, item);
  //     return [...newItems];
  //   });
  // };
  return (
    <div className={styles.wrapper}>
      <div className={styles.card_wrapper}>
        <h2>Events</h2>
        <CreateEvent />
        {/* {eventsError ? <div className={styles.no_events}>{eventsError}</div> : ''}
        {eventsList &&
          eventsList.map((data) => (
            <div key={data.eventId} className={styles.eventCards}>
              <Accordion>
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
                  <div className={styles.row}>
                    <p>{data.eventDescription}</p>
                    <CreateTeam eventId={data.eventId} />
                  </div>
                  <DndProvider backend={HTML5Backend}>
                    {teams.map((s) => (
                      <div key={s.teamId} className={'col-wrapper'}>
                        <h2 className={'col-header'}>{s.teamName.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} teamId={s.teamId}>
                          <Col>
                            {items
                              .filter((i) => i.teamId === s.teamId)
                              .map((i, idx) => (
                                <Item key={i.uuid} item={i} index={idx} moveItem={moveItem} />
                              ))}
                          </Col>
                        </DropWrapper>
                      </div>
                    ))}
                  </DndProvider>
                </Accordion.Content> */}
        {/* <div className={styles.delete_btn}>
                  <Button color="red" onClick={() => deleteEvent(data.eventId)}>
                    Delete
                  </Button>
                </div>
              </Accordion> */}
        {/* </div>
          ))} */}
      </div>
    </div>
  );
}
