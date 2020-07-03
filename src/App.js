import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./pages/header.js";
import Footer from "./pages/footer.js";
import Main from "./pages/main.js";
import LogIn from "./components/login.js";
import Profile from "./pages/ark";
import Register from "./components/register.js";

import { AuthState } from "./utils/context/Auth/AuthState.js";
import { PrivateRoute } from "./utils/privateRoute";

import app from "./stylesheets/App.module.scss";

function App() {
	return (
		<div className={app.App}>
			<Switch>
				<AuthState>
					<Header />
					<Route exact path="/" component={Main} />
					<Route path="/login" component={LogIn} />
					<Route path="/register" component={Register} />
					<PrivateRoute path="/user" component={Profile} />
				</AuthState>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
