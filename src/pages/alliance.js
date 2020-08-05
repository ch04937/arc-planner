import React, { useEffect, useContext } from "react";

import { PlayerContext } from "../utils/context/Player/PlayerState";

export default function Alliance() {
	const { getAlliance } = useContext(PlayerContext);

	useEffect(() => {
		console.log("here");
		getAlliance();
	}, []);
	return <div>Alliance</div>;
}
