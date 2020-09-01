import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./pages/header.js";
import Footer from "./pages/footer.js";
import Main from "./pages/main.js";
import LogIn from "./components/login.js";
import Profile from "./pages/profile";
import Register from "./components/register.js";
import Dashboard from "./pages/dashboard.js";
import Alliance from "./pages/alliance";

import { AuthState } from "./utils/context/Auth/AuthState.js";
import { PlayerState } from "./utils/context/Player/PlayerState.js";
import { PrivateRoute } from "./utils/privateRoute";

import app from "./stylesheets/app.module.scss";

function App() {
  return (
    <div className={app.App}>
      <Switch>
        <AuthState>
          <PlayerState>
            <Header />
            <Route exact path="/" component={Main} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/alliance" component={Alliance} />
            <PrivateRoute path="/user" component={Profile} />
          </PlayerState>
        </AuthState>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
