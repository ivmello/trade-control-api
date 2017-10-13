const mysqlServer = require('mysql')
const conn = mysqlServer.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE
})

module.exports = conn
