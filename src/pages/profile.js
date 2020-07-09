import React, { useContext } from "react";

import styles from "../stylesheets/profile.module.scss";

export default function Profile() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<h1>Governor Profile</h1>
			</div>
			<div className={styles.profile}>
				<div className={styles.banner}>
					<p>SOMETHING HERE</p>
					<p>SOMETHING HERE</p>
					<p>SOMETHING HERE</p>
					<p>SOMETHING HERE</p>
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
