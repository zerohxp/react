import React from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom'

import Index from '../components/index.js'
import Design from '../design/index.js'

const routes = [
    { path: '/', component: Index, exact: true },
    { path: '/design', component: Design }
];

export default routes
