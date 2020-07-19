import React, { useContext, useEffect } from "react";

import ProfileImg from "../components/profile/profileimg";
import ProfileTroops from "../components/profile/profileTroops";

import { ArkContext } from "../utils/context/Ark/ArkState";

import styles from "../stylesheets/profile.module.scss";

export default function Profile() {
	const { getProfile } = useContext(ArkContext);

	useEffect(() => {
		getProfile();
	}, []);
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<h1>Governor Profile</h1>
			</div>
			<div className={styles.profile}>
				<div className={styles.banner}>
					<ProfileImg />
				</div>
				<div className={styles.content}>
					<ProfileTroops />
				</div>
			</div>
			<div className={styles.buttons}>
				<div className={styles.btns}>
					<p>button</p>
					<p>button</p>
					<p>button</p>
					<p>button</p>
					<p>button</p>
				</div>
			</div>
		</div>
	);
}
