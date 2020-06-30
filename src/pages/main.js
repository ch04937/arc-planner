import React from "react";
import { Link } from "react-router-dom";

import styles from "../stylesheets/main.module.scss";

export default function Main() {
	return (
		<div className={styles.home}>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
		</div>
	);
}
