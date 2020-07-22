import React from "react";
import { Link } from "react-router-dom";

import styles from "../stylesheets/main.module.scss";

export default function Main({ history }) {
	const rfToken = localStorage.getItem("refreshToken");

	if (rfToken) {
		history.push("/user");
	}

	return (
		<div className={styles.home}>
			<div className={styles.title}>
				<h2>Ark Planner</h2>
				<p>
					Help coordinate with your alliance to let them know your
					strengths
				</p>
			</div>
			<div className={styles.btn}>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
		</div>
	);
}
