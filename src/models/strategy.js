const conn = require('../services/database')

const Strategy = new Promise((resolve, reject) => {
  conn.query('SELECT * FROM tbl_strategy', (err, result) => {
    if (err) reject(err)
    resolve(result)
  })
})

module.exports = Strategy
