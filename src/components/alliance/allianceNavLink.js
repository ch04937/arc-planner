import React, { useState, useEffect, useContext } from "react";
import { Menu } from "semantic-ui-react";

import AllianceContent from "./allianceContent";
import AllianceSettings from "./settings";

import custom from "../../stylesheets/custom-styles.module.scss";
import { PlayerContext } from "../../utils/context/Player/PlayerState";
import Events from "../event/events";
import Members from "../event/members";

export default function AllianceNavLink() {
  const { getPermissions, permissions } = useContext(PlayerContext);
  const [activeItem, setActiveItem] = useState("members");

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }
  useEffect(() => {
    getPermissions();
  }, []);

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
            <Menu fluid vertical pointing tabular secondary>
              <Menu.Item
                name="alliance"
                active={activeItem === "alliance"}
                onClick={handleItemClick}
              />
              {permissions.isLead ? (
                <Menu.Item
                  name="events"
                  active={activeItem === "events"}
                  onClick={handleItemClick}
                />
              ) : (
                ""
              )}
              {permissions.isOwner ? (
                <Menu.Item
                  name="settings"
                  active={activeItem === "settings"}
                  onClick={handleItemClick}
                />
              ) : (
                ""
              )}
              <Menu.Item
                name="members"
                active={activeItem === "members"}
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
