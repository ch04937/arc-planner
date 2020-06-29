import React from "react";
import { Link } from "react-router-dom";

import styles from "../stylesheets/hf.module.scss";

export default function Header() {
	return (
		<div className={styles.header}>
			<Link to="/">Ark Planner</Link>
		</div>
	);
}
