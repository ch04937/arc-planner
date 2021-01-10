import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
// import Main from './pages/main';
// import Profile from './pages/profile';
// import Dashboard from './pages/dashboard';
// import Alliance from './pages/alliance';
// import { AuthState } from './utils/context/Auth/AuthState';
// import { PlayerState } from './utils/context/Player/PlayerState';
// import { PrivateRoute } from './utils/privateRoute';
// import app from './stylesheets/app.module.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
