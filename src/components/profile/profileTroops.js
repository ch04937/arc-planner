import React, { useContext } from "react";

import { ArkContext } from "../../utils/context/Ark/ArkState";

import styles from "../../stylesheets/profile.module.scss";
import TroopBtns from "./troopBtns";

export default function ProfileTroops() {
	const { profile } = useContext(ArkContext);
	return (
		<>
			<div className={styles.troops}>
				<div className={styles.tier}>
					<p>TIER 3 ARCHER:</p>
					{profile && profile.t3arch}
					<TroopBtns />
				</div>
				<div className={styles.tier}>
					<p>TIER 3 INFANTRIES:</p>
					{profile && profile.t3inf}
				</div>
				<div className={styles.tier}>
					<p>TIER 3 CAVALRY:</p>
					{profile && profile.t3cav}
				</div>
				<div className={styles.tier}>
					<p>TIER 4 ARCHER:</p>
					{profile && profile.t4arch}
				</div>
				<div className={styles.tier}>
					<p>TIER 4 INFANTRIES:</p>
					{profile && profile.t4inf}
				</div>
				<div className={styles.tier}>
					<p>TIER 4 CAVALRY:</p>
					{profile && profile.t4cav}
				</div>
				<div className={styles.tier}>
					<p>TIER 5 ARCHER:</p>
					{profile && profile.t5arch}
				</div>
				<div className={styles.tier}>
					<p>TIER 5 INFANTRIES:</p>
					{profile && profile.t5inf}
				</div>
				<div className={styles.tier}>
					<p>TIER 5 CAVALRY:</p>
					{profile && profile.t5cav}
				</div>
			</div>
		</>
	);
}
