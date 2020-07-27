import React, { useContext } from "react";

import TroopBtns from "./troopBtns";

import { ArkContext } from "../../utils/context/Ark/ArkState";

import styles from "../../stylesheets/profile.module.scss";

export default function ProfileTroops() {
	const { profile } = useContext(ArkContext);
	return (
		<div className={styles.t_wrapper}>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 3 ARCHER:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t3arch" count={profile.t3arch} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 3 INFANTRIES:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t3inf" count={profile.t3inf} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 3 CAVALRY:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t3cav" count={profile.t3cav} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 4 ARCHER:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t4arch" count={profile.t4arch} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 4 INFANTRIES:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t4arch" count={profile.t4arch} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 4 CAVALRY:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t4arch" count={profile.t4arch} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 5 ARCHER:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t4arch" count={profile.t4arch} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 5 INFANTRIES:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t4arch" count={profile.t4arch} />
				</div>
			</div>
			<div className={styles.t_troops}>
				<div className={styles.t_content}>TIER 5 CAVALRY:</div>
				<div className={styles.t_content}>
					<TroopBtns type="t4arch" count={profile.t4arch} />
				</div>
			</div>
		</div>
	);
}
