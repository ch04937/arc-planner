import React, { useContext, useEffect } from "react";
import ProfileImg from "../components/profileimg";

import { ArkContext } from "../utils/context/Ark/ArkState";

import styles from "../stylesheets/profile.module.scss";

export default function Profile() {
	const { profile, getProfile } = useContext(ArkContext);
	// function submitFile() {
	// 	// img === null ? console.log("img is null", img) : console.log(img);
	// // }
	// useEffect(() => {
	// 	getProfile();
	// }, [profile]);
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
					<p>CONTENT</p>
					<p>CONTENT</p>
					<p>CONTENT</p>
					<p>CONTENT</p>
					<p>CONTENT</p>
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
