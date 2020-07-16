import React from "react";
import { Link } from "react-router-dom";

import { checkAuth } from "../utils/localStorage";

import Settings from "../components/settings";

import styles from "../stylesheets/hf.module.scss";

export default function Header() {
	return (
		<div className={styles.header}>
			<div>
				<Link to="/">Ark Planner</Link>
			</div>
			{checkAuth() ? (
				<div className={styles.nav}>
					<Link to="/dashboard">Dashboard</Link>
					<Settings />
				</div>
			) : (
				<div>
					<Link to="/login">Sign In</Link>
				</div>
			)}
		</div>
	);
}
