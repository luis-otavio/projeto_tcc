const restful = require('node-restful')
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
    description: { type: String, require: true },
    modelo: { type: String, require: true },
    couro: { type: String, require: true },
    qt_couro: { type: String, require: true },
    metal: { type: String, require: true },
    qt_metal: { type: String, require: true },
    forro: { type: String, require: true },
    qt_forro: { type: String, require: true },
    ziper: { type: String, require: true },
    qt_ziper: { type: String, require: true },
    vl_montagem: { type: String, require: true },
    vl_tear:  { type: String, require: true },
    total_pro: { type: String, require: true }
})

module.exports = restful.model('Produto', productSchema)