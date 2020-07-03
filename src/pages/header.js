import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../utils/context/Auth/AuthState";

import styles from "../stylesheets/hf.module.scss";

export default function Header() {
	const { accessToken, signOut } = useContext(AuthContext);

	return (
		<div className={styles.header}>
			<div>
				<Link to="/">Ark Planner</Link>
			</div>
			{accessToken ? (
				<div className={styles.nav}>
					<Link to="/user">Profile</Link>
					<div onClick={() => signOut()}>Sign Out</div>
				</div>
			) : (
				<div>
					<Link to="/login">Sign In</Link>
				</div>
			)}
		</div>
	);
}
