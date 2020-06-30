import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./pages/header.js";
import Footer from "./pages/footer.js";
import Main from "./pages/main.js";
import LogIn from "./components/login.js";

import { AuthState } from "./utils/context/Auth/AuthState.js";

import app from "./stylesheets/App.module.scss";

function App() {
	return (
		<div className={app.App}>
			<Header />
			<Switch>
				<AuthState>
					<Route exact path="/" component={Main} />
					<Route path="/login" component={LogIn} />
				</AuthState>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
