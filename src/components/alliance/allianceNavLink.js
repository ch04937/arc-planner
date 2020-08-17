import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

import AllianceContent from "./allianceContent";
import AllianceSettings from "./settings";

import custom from "../../stylesheets/custom-styles.module.scss";

export default function AllianceNavLink() {
  const [activeItem, setActiveItem] = useState("bio");

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  const navLink = {
    alliance: <AllianceContent />,
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
