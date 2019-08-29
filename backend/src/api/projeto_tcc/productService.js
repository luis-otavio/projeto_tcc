const Produto = require('./product')

Produto.methods(['get', 'post', 'put', 'delete'])
Produto.updateOptions({new: true, runValidators: true})