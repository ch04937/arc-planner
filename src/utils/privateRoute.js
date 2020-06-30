import React from "react";
import { Route, Redirect } from "react-router-dom";
import { loadState } from "./localStorage";

export default function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				loadState() ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
}
