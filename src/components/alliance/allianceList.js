import React, { useContext } from "react";

import CreateAlliance from "./createAlliance";

import { PlayerContext } from "../../utils/context/Player/PlayerState";

import custom from "../../stylesheets/custom-styles.module.scss";
import styles from "../../stylesheets/profile.module.scss";

export default function AllianceList() {
  const {
    isLoading,
    alliance,
    applications,
    sendApplication,
    cancelApplication,
  } = useContext(PlayerContext);
  function applicationSent(e) {
    sendApplication(e);
  }
  function applicationCancel(e) {
    cancelApplication(e);
  }
  return (
    <div>
      <div className={custom.header}>
        <h1>Alliance List</h1>
      </div>
      <div className={custom.body}>
        <div className={custom.content} style={{ flexDirection: "column" }}>
          <h4>Your not currently a member of an alliance</h4>
          {/* <p>search bar</p> */}
          <CreateAlliance />
          <div className={custom.scrollable}>
            {alliance &&
              alliance.map((data, idx) => (
                <div key={data.uuid} className={custom.row}>
                  <p>{idx + 1}.</p>
                  <p>{data.kingdomNumber}</p>
                  <p>{data.allianceTag}</p>
                  <p>{data.allianceName}</p>

                  {applications.includes(data.uuid) ? (
                    <button
                      className={custom.cancel_btn}
                      onClick={() => applicationCancel(data.uuid)}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      className={custom.save_btn}
                      onClick={() => applicationSent(data.uuid)}
                    >
                      Apply
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
