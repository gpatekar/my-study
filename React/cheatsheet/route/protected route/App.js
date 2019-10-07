import React from 'react';
import './App.css';
import { validUser } from './services/auth';
import Header from './shared-components/Header';
import ProtectedRoutes from './shared-components/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import Login from './pages/Login';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  let isAuthenticate = validUser();
  return (
    <div className="App">
      {isAuthenticate && <Header />}
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <ProtectedRoutes path="/dashboard" component={Dashboard} />
        <ProtectedRoutes path="/pricing" component={Pricing} />
      </Router>
    </div>
  );
}

export default App;
