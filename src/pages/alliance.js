import React, { useEffect, useContext } from "react";

import Navbar from "./navbar";

import { PlayerContext } from "../utils/context/Player/PlayerState";

import custom from "../stylesheets/custom-styles.module.scss";
import styles from "../stylesheets/profile.module.scss";
import CreateAlliance from "../components/alliance/createAlliance";

export default function Alliance() {
  const {
    getAlliance,
    alliance,
    userProfile,
    getUserProfile,
    isLoading,
  } = useContext(PlayerContext);

  useEffect(() => {
    getAlliance();
    getUserProfile();
  }, []);
  console.log("userProfile", userProfile);

  console.log("alliance", alliance);
  return (
    <div className={custom.wrapper}>
      {userProfile.isMember ? (
        <></>
      ) : (
        <>
          <div className={custom.header}>
            <h1>Alliance List</h1>
          </div>
          <div className={custom.body} style={{ flexDirection: "column" }}>
            <h4>Your not currently a member of an alliance</h4>
            {/* <p>search bar</p> */}
            <CreateAlliance />
            {alliance &&
              alliance.map((data, idx) => (
                <div key={data.uuid} className={custom.row}>
                  <p>{idx + 1}.</p>
                  <p>{data.kingdomNumber}</p>
                  <p>{data.allianceTag}</p>
                  <p>{data.allianceName}</p>
                  <div>
                    <p>APPLY</p>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      <div className={styles.buttons}>
        <Navbar />
      </div>
    </div>
  );
}
