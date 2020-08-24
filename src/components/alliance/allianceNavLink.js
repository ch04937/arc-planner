import React, { useState, useEffect, useContext } from "react";
import { Menu } from "semantic-ui-react";

import AllianceContent from "./allianceContent";
import AllianceSettings from "./settings";

import custom from "../../stylesheets/custom-styles.module.scss";
import { PlayerContext } from "../../utils/context/Player/PlayerState";
import Events from "../event/events";
import Members from "../event/members";

export default function AllianceNavLink() {
  const { getAlliance, alliance, getApplications, applications } = useContext(
    PlayerContext
  );
  const [activeItem, setActiveItem] = useState("alliance");

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }
  useEffect(() => {
    getApplications();
  }, [applications.length]);
  const navLink = {
    alliance: <AllianceContent />,
    events: <Events />,
    members: <Members />,
    settings: <AllianceSettings />,
  };
  return (
    <div>
      <div className={custom.header}>
        <h1>Alliance</h1>
      </div>
      <div className={custom.body}>
        <div className={custom.content}>
          <div style={{ paddingLeft: "1rem" }}>
            <Menu fluid vertical pointing tabular>
              <Menu.Item
                name="alliance"
                active={activeItem === "alliance"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="events"
                active={activeItem === "events"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="members"
                active={activeItem === "members"}
                onClick={handleItemClick}
              />
              <Menu.Item
                name="settings"
                active={activeItem === "settings"}
                onClick={handleItemClick}
              />
            </Menu>
          </div>
          <div style={{ width: "100%" }}>{navLink[activeItem]}</div>
        </div>
      </div>
    </div>
  );
}
