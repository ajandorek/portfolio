import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

//Load components
import Main from 'Main';
import About from 'About';
import Home from 'Home';
import Portfolio from 'Portfolio';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="portfolio" component={Portfolio} />
            <IndexRoute component={Home} />
        </Route>
    </Router>,
    document.getElementById('app')
);