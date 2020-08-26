import React, { useState, useContext } from "react";

import { PlayerContext } from "../../utils/context/Player/PlayerState";

import custom from "../../stylesheets/custom-styles.module.scss";
import styles from "../../stylesheets/profile.module.scss";

export default function TroopBtns({ type, counts }) {
  const [isPositive, setIsPositive] = useState(true);
  const [hasChanged, setHasChanged] = useState(false);
  let [addedTroops, setAddedTroops] = useState(0);
  const [inputTroops, setInputTroops] = useState(0);

  const { profile, updateTroops } = useContext(PlayerContext);
  function togglePositive() {
    setIsPositive(!isPositive);
  }
  function updateCount(count) {
    setHasChanged(true);
    isPositive
      ? setAddedTroops((addedTroops += count))
      : setAddedTroops((addedTroops -= count));
  }
  function inputChange(count) {
    setHasChanged(true);
    setAddedTroops(0);
    setInputTroops(count);
  }
  function saveTroops() {
    inputTroops === 0
      ? updateTroops(type, addedTroops + counts)
      : updateTroops(type, inputTroops);
    setHasChanged(false);
    setAddedTroops(0);
  }
  return (
    <>
      <div className={styles.t_content}>
        <div className={styles.count}>
          <input
            className={custom.input}
            key={profile[type]}
            type="text"
            defaultValue={counts}
            onChange={(e) => inputChange(e.target.value)}
          />
          {hasChanged && addedTroops !== 0 ? (
            <>
              {isPositive ? (
                <div className={styles.positive}>+{addedTroops}</div>
              ) : (
                <div className={styles.negative}>-{addedTroops}</div>
              )}
            </>
          ) : (
            <div className={custom.box}></div>
          )}
        </div>
      </div>
      <div
        onClick={togglePositive}
        className={isPositive ? custom.green_btn : custom.red_btn}
      >
        {isPositive ? "+" : "-"}
      </div>
      <div className={custom.sets}>
        <div
          className={isPositive ? custom.green_btn : custom.red_btn}
          onClick={() => updateCount(100)}
        >
          100
        </div>
        <div
          className={isPositive ? custom.green_btn : custom.red_btn}
          onClick={() => updateCount(500)}
        >
          500
        </div>
        <div
          className={isPositive ? custom.green_btn : custom.red_btn}
          onClick={() => updateCount(1000)}
        >
          1000
        </div>
        {hasChanged ? (
          <button className={custom.save_btn} onClick={() => saveTroops()}>
            Save
          </button>
        ) : (
          <div className={custom.box}></div>
        )}
      </div>
    </>
  );
}
