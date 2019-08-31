const restful = require('node-restful')
const mongoose = restful.mongoose

const materialSchema = new mongoose.Schema({
    tp_mat: { type: String, require: true },
    nm_mat: { type: String, require: true },
    vl_mat: { type: Number, require: true },
})

module.exports = restful.model('Material', materialSchema)
