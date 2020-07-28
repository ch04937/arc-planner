import React, { useState, useContext, useEffect } from "react";

import { ArkContext } from "../../utils/context/Ark/ArkState";

import custom from "../../stylesheets/custom-styles.module.scss";
import styles from "../../stylesheets/profile.module.scss";

export default function TroopBtns({ type, count }) {
	const [isPositive, setIsPositive] = useState(true);
	const [hasChanged, setHasChanged] = useState(false);
	let [addedTroops, setAddedTroops] = useState(0);

	const { profile } = useContext(ArkContext);

	function togglePositive() {
		setIsPositive(!isPositive);
	}
	function saveTroops(params) {
		setHasChanged(false);
		setAddedTroops(0);
		console.log("type", type);
		console.log("params", params);
	}

	function updateCount(count) {
		setHasChanged(true);
		isPositive
			? setAddedTroops((addedTroops += count))
			: setAddedTroops((addedTroops -= count));
	}
	return (
		<div className={custom.center}>
			<div className={styles.t_content}>
				<div className={styles.count}>
					{count}
					{hasChanged ? (
						<>
							{isPositive ? (
								<div className={styles.positive}>+{addedTroops}</div>
							) : (
								<div className={styles.negative}>-{addedTroops}</div>
							)}
						</>
					) : (
						""
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
			</div>
			{hasChanged ? (
				<button className={custom.save_btn} onClick={() => saveTroops()}>
					Save
				</button>
			) : (
				""
			)}
		</div>
	);
}
