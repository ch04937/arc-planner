import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "./localStorage";

export default function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn() ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
}
