import React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

const checkAuth = () => {
	const token = localStorage.getItem("accessToken");
	const refreshToken = localStorage.getItem("refreshToken");
	// check weather given tokens are in local storage
	if (!token || !refreshToken) {
		return false;
	}
	try {
		// decode token
		const { exp } = decode(refreshToken);
		// check if its expired
		if (exp < new Date().getTime() / 1000) {
			return false;
		}
	} catch (e) {
		//  cant decode token
		return false;
	}
	return true;
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			checkAuth() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/login",
					}}
				/>
			)
		}
	/>
);
