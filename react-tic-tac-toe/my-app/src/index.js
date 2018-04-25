import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HashRouter, Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Game from './components/tic-tac-toe/tic-tac-toe';
import EsriMap from './components/esri-maps/esri-map';


// ========================================
const history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <Switch>
      {/*<Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>*/}
      <Route path="/" name="Home" component={EsriMap}/> 
    </Switch>
  </Router>
), document.getElementById('root'));