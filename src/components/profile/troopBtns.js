import React, { useState, useContext, useEffect } from "react";

import { ArkContext } from "../../utils/context/Ark/ArkState";

import custom from "../../stylesheets/custom-styles.module.scss";
import styles from "../../stylesheets/profile.module.scss";

export default function TroopBtns({ type, count }) {
	const [isPositive, setIsPositive] = useState(true);
	const [hasChanged, setHasChanged] = useState(false);

	let addedTroops = 0;

	const { profile } = useContext(ArkContext);

	function togglePositive() {
		setIsPositive(!isPositive);
	}
	function saveTroops(params) {
		setHasChanged(false);
		console.log("type", type);
		console.log("params", params);
	}

	function updateCount(count) {
		setHasChanged(true);
		addedTroops += count;
		console.log("addedTroops", addedTroops);
	}
	return (
		<div className={custom.center}>
			<div className={styles.t_content}>
				{count}
				{hasChanged ? (
					<>{isPositive ? " + " + addedTroops : "-"}</>
				) : (
					""
				)}
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
			</div>
			<button className={custom.save_btn} onClick={() => saveTroops()}>
				Save
			</button>
		</div>
	);
}
