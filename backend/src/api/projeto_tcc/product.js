const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    description: { type: String, require: true },
    modelo: { type: String, require: true },
    vl_montagem: { type: Number, require: false },
    vl_tear:  { type: Number, require: false },
    createdAd: { type: Date, default: Date.now }
})

module.exports = restful.model('Produto', productSchema)
