import React, { useState, useEffect, useContext } from "react";
import { Menu, Modal, Icon } from "semantic-ui-react";

import AllianceContent from "./allianceContent";
import AllianceSettings from "./settings";

import custom from "../../stylesheets/custom-styles.module.scss";
import { PlayerContext } from "../../utils/context/Player/PlayerState";
import Events from "../event/events";
import Members from "../event/members";

export default function AllianceNavLink() {
  const { getPermissions, permissions } = useContext(PlayerContext);
  const [activeItem, setActiveItem] = useState("members");
  const [open, setOpen] = useState(false);

  function handleItemClick(e, { name }) {
    setOpen(false);
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
  const width = window.innerWidth;
  // { ? "800px" : window.innerWidth}

  return (
    <div>
      <div className={custom.header}>
        <h1>Alliance</h1>
      </div>
      <div className={custom.body}>
        <div className={custom.content}>
          <div className={custom.menu}>
            <Modal
              basic
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              size="small"
              trigger={<Icon name="bars" size="large" />}
            >
              <Modal.Header>Menu</Modal.Header>
              <Modal.Actions>
                <Menu text vertical inverted fluid tabular secondary>
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
              </Modal.Actions>
            </Modal>
          </div>
          <div style={{ width: "100%" }}>{navLink[activeItem]}</div>
        </div>
      </div>
    </div>
  );
}
