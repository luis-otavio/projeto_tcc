const restful = require('node-restful')
const mongoose = restful.mongoose

const materialSchema = new mongoose.Schema({
    product: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        require: true,
    },
    mat_tipo: { type: String, require: true },
    mat_nome: { type: String, require: true },
    mat_custo: { type: Number, require: true },
    createdAd: { type: Date, default: Date.now }
})

module.exports = restful.model('Material', materialSchema)
