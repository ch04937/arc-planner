import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";

import Register from "../components/register";
import LogIn from "../components/login";

import styles from "../stylesheets/custom-styles.module.scss";

export default function Main({ history }) {
  const rfToken = localStorage.getItem("refreshToken");

  const [activeItem, setActiveItem] = useState("login");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  if (rfToken) {
    history.push("/user");
  }

  const auth = { login: <LogIn />, register: <Register /> };

  return (
    <div className={styles.main}>
      <Segment raised>
        <div>
          <h2>Ark Planner</h2>
          <p>
            Help coordinate with your alliance to let them know your strengths
          </p>
        </div>
      </Segment>
      <div className={styles.card}>
        <Segment raised>
          <Menu pointing secondary>
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="register"
              active={activeItem === "register"}
              onClick={handleItemClick}
            />
          </Menu>
          {auth[activeItem]}
        </Segment>
      </div>
    </div>
  );
}
