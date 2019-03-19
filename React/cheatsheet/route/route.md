# React

## How to install
npm install --save react-router-dom

**Usage**
```
import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import NoMatch from './components/NoMatch';

import Home from './components/AccountCallList';
import AboutUS from './components/ArchiveCallList';
import ContactUS from './components/CallList';
import SinglePage from './components/SingleCall';
import SingleFlexCall from './components/SingleFlexCall'; 

const Routes = () => (
    <section>
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUS} />
            <Route path="/contact-us" component={ContactUS} />
            <Route path="/single-page/:Id" component={SinglePage} />
            <Route path="/flex-call/:CallId" component={SingleFlexCall} /> 
            <Route component={NoMatch} />
        </Switch>
    </section>
);

export default Routes;
```
