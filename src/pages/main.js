import React from "react";
import { Link } from "react-router-dom";

import styles from "../stylesheets/main.module.scss";
import app from "../stylesheets/App.module.scss";

export default function Main() {
	return (
		<div className={styles.main}>
			<div className={app.btn}>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</div>
		</div>
	);
}
