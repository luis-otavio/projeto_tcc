import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Product from '../product/product'
import Material from '../material/material'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/products' component={Product} />
        <Route path='/materials' component={Material} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/products' />
    </Router>
)