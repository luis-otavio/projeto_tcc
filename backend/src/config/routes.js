const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // PRODUTO Routes
    const productSchema = require('../api/projeto_tcc/productService')
    productService.regisrer(routr, '/products')
    
}