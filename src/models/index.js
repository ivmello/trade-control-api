const fs = require('fs')
const path = require('path')
const conn = require('../services/database')
const errorHandler = require('../services/errorHandler')

const basename = path.basename(module.filename)
const models = {}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    let module = file.split('.js')[0]
    if (module !== 'index') {
      models[module] = require(path.join(__dirname, module))({ conn, errorHandler })
    }
  })

module.exports = {
  models
}
