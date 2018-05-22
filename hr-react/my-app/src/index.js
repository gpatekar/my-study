import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
 
import {Route, Switch, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

 

// Containers
import Full from './containers/Full/Full'

// Views
// import Login from './views/Pages/Login/'
// import Register from './views/Pages/Register/'
// import Page404 from './views/Pages/Page404/'
// import Page500 from './views/Pages/Page500/'

const history = createBrowserHistory();

ReactDOM.render((
  <Router history={history}>
    <Switch>
      {/*<Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>*/}
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </Router>
), document.getElementById('root'));