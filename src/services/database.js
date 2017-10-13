const mysqlServer = require('mysql')
const conn = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'trades-control-api'
})

module.exports = conn
