import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Product from '../product/product'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/products' component={Product} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/products' />
    </Router>
)