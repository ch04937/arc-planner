import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./pages/header.js";
import Footer from "./pages/footer.js";
import Main from "./pages/main.js";

import app from "./stylesheets/App.module.scss";

function App() {
	return (
		<div className={app.App}>
			<Header />
			<Switch>
				<Route exact path="/" component={Main} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
