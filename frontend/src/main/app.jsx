import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Product from '../product/product'
import About from '../about/about'
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu />
        <Product />
        <About />
    </div>
)