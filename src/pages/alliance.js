import React, { useEffect, useContext } from "react";

import { PlayerContext } from "../utils/context/Player/PlayerState";
import { AuthContext } from "../utils/context/Auth/AuthState";

export default function Alliance() {
	const { getAlliance } = useContext(PlayerContext);
	const { userProfile } = useContext(AuthContext);

	useEffect(() => {
		console.log("here");
		getAlliance();
	}, []);
	// console.log("profile", userProfile);
	return <div>Alliance</div>;
}
