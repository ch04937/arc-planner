import React, { useContext, useEffect, useState } from "react";

import TroopBtns from "./troopBtns";

import { PlayerContext } from "../../utils/context/Player/PlayerState";

import styles from "../../stylesheets/profile.module.scss";

export default function ProfileTroops() {
	const { profile, getProfile } = useContext(PlayerContext);
	const t3 = profile.t3arch + profile.t3inf + profile.t3cav;
	const t4 = profile.t4arch + profile.t4inf + profile.t4cav;
	const t5 = profile.t5arch + profile.t5inf + profile.t5cav;

	useEffect(() => {
		console.log("t3% : ", (t3 * 100) / (t3 + t4 + t5));
		getProfile();
	}, []);
	return (
		<div className={styles.t_wrapper}>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 3 ARCHER:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t3arch" counts={profile.t3arch} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 3 INFANTRIES:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t3inf" counts={profile.t3inf} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 3 CAVALRY:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t3cav" counts={profile.t3cav} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 4 ARCHER:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t4arch" counts={profile.t4arch} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 4 INFANTRIES:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t4inf" counts={profile.t4inf} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 4 CAVALRY:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t4cav" counts={profile.t4cav} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 5 ARCHER:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t5arch" counts={profile.t5arch} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 5 INFANTRIES:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t5inf" counts={profile.t5inf} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 5 CAVALRY:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t5cav" counts={profile.t5cav} />
				</div>
			</div>
			<div className={styles.bar}>
				<div
					style={{
						width: `${(t3 * 100) / (t3 + t4 + t5)}%` || "100px",
						background: "#2962ff",
					}}
				>
					{profile.t3inf + profile.t3cav + profile.t3arch} t3
				</div>
				<div
					style={{
						width: `${(t4 * 100) / (t3 + t4 + t5)}%` || "0px",
						background: "#8A2BE2",
					}}
				>
					{profile.t4inf + profile.t4cav + profile.t4arch} t4
				</div>
				<div
					style={{
						width: `${(t5 * 100) / (t3 + t4 + t5)}%` || "0px",
						background: "#FFA500",
					}}
				>
					{profile.t5inf + profile.t5cav + profile.t5arch} t5
				</div>
			</div>
		</div>
	);
}
