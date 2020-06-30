import React from "react";
import { Link } from "react-router-dom";

import { removeState } from "../utils/localStorage";

import styles from "../stylesheets/hf.module.scss";

export default function Header() {
	const token = localStorage.getItem("accessToken");
	function signOut() {
		removeState();
	}
	return (
		<div className={styles.header}>
			<div>
				<Link to="/">Ark Planner</Link>
			</div>
			{token === !null ? (
				<div>
					<Link to="/user">Profile</Link>
					<Link to="/" onClick={signOut}>
						Sign Out
					</Link>
				</div>
			) : (
				<div>
					<Link to="/login">Sign In</Link>
				</div>
			)}
		</div>
	);
}
