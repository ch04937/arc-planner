import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../utils/context/Auth/AuthState";

import styles from "../stylesheets/hf.module.scss";

export default function Settings() {
	const { signOut } = useContext(AuthContext);
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	return (
		<div className={styles.setting}>
			<div onClick={toggle} className={styles.title}>
				Settings
			</div>
			<div className={styles.content_wrapper}>
				{isOpen && (
					<>
						<div className={styles.content} onClick={toggle}>
							<Link to="/user">Profile</Link>
						</div>
						<div
							onClick={() => {
								toggle();
								signOut();
							}}
							className={styles.content}
						>
							Sign Out
						</div>
					</>
				)}
			</div>
		</div>
	);
}
