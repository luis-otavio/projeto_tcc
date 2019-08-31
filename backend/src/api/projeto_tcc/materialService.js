const Material = require('./material')

Material.methods(['get', 'post', 'put', 'delete'])
Material.updateOptions({new: true, runValidators: true})

module.exports = Material