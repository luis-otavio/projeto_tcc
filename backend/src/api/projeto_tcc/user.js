const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true, lowercase: true },
    password: { type: String, require: true, select: false },
    passwordReset: { type: String, select: false },
    createdAd: { type: Date, default: Date.now },
})

module.exports = restful.model('User', userSchema)