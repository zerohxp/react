import React from 'react';
import ReactDOM from 'react-dom';
import {
    Switch,
    HashRouter as Router,
    Route
  } from 'react-router-dom';
import FastClick from 'fastclick';
import routes from './router/router';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

window.addEventListener('load', () => {
  FastClick.attach(document.body);
});

const App = (props, context) =>
(
    <Router>
        <Switch>
            {
                routes.map( route=> (
                    <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
                ))
            }
        </Switch>
    </Router>
);
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
