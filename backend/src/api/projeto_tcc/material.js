const restful = require('node-restful')
const mongoose = restful.mongoose

const materialSchema = new mongoose.Schema({
    mat_tipo: { type: String, require: true },
    mat_nome: { type: String, require: true },
    mat_custo: { type: Number, require: true },
})

module.exports = restful.model('Material', materialSchema)
