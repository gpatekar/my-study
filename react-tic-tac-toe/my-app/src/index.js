import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HashRouter, Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import Game from './components/tic-tac-toe/tic-tac-toe';
import EsriMap from './components/esri-maps/esri-map';
// import liftingStateUp from './components/tutor/lifting-state-up/lifting-state-up'
import Calculator from './components/tutor/lifting-state-up/calculator'


// ========================================
const history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <Switch>
      {/*<Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>*/}
      <Route exact path="/tutor" name="Tutor" component={Calculator}/>
      <Route path="/map" name="Home" component={EsriMap}/> 
      <Route path="/game" name="tic-tac-toe" component={Game}/> 
    </Switch>
  </Router>
), document.getElementById('root'));