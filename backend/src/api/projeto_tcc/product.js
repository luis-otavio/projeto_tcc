const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    description: { type: String, require: true },
    modelo: { type: String, require: true },
    couro: { type: String, require: true },
    qt_couro: { type: Number, require: true },
    metal: { type: String, require: true },
    qt_metal: { type: Number, require: true },
    forro: { type: String, require: true },
    qt_forro: { type: Number, require: true },
    ziper: { type: String, require: true },
    qt_ziper: { type: Number, require: true },
    vl_montagem: { type: Number, require: true },
    vl_tear:  { type: Number, require: true },
    total_pro: { type: Number, require: true }
})

module.exports = restful.model('Produto', productSchema)