import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history'
//Load components
import Main from 'Main';
import About from 'About';
import Home from 'Home';
import Portfolio from 'Portfolio';
import ContactForm from 'ContactForm';

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(
    <Router history={appHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="portfolio" component={Portfolio} />
            <Route path="contact_me" component={ContactForm} />
            <IndexRoute component={Home} />
        </Route>
    </Router>,
    document.getElementById('app')
);