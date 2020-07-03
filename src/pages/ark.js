import React, { useContext } from "react";

import { AuthContext } from "../utils/context/Auth/AuthState";

export default function Profile() {
	const { userProfile } = useContext(AuthContext);
	console.log("userProfile", userProfile);
	return <div></div>;
}
