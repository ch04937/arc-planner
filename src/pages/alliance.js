import React, { useEffect, useContext } from "react";

import { PlayerContext } from "../utils/context/Player/PlayerState";

import custom from "../stylesheets/custom-styles.module.scss";
import CreateAlliance from "../components/alliance/createAlliance";

export default function Alliance() {
  const { getAlliance, alliance } = useContext(PlayerContext);
  useEffect(() => {
    getAlliance();
  }, []);

  console.log("alliance", alliance);
  return (
    <div className={custom.center}>
      <CreateAlliance />
      {alliance.length === 0 ? (
        <>
          <p>No alliance currently in the kingdom</p>
        </>
      ) : (
        <div>
          {alliance &&
            alliance.map((data) => (
              <div key={data.uuid}>
                <p>{data.kingdomNumber}</p>
                <p>{data.allianceTag}</p>
                <p>{data.allianceName}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
