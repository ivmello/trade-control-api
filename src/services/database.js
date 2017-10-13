const mysqlServer = require('mysql')
const env = process.env.NODE_ENV || 'development'

let conn = {}

if (env === 'development') {
  conn = mysqlServer.createConnection({
    host: process.env.DEV_DATABASE_HOST,
    user: process.env.DEV_DATABASE_USER,
    password: process.env.DEV_DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE_NAME
  })
}

if (env === 'test') {
  conn = mysqlServer.createConnection({
    host: process.env.TEST_DATABASE_HOST,
    user: process.env.TEST_DATABASE_USER,
    password: process.env.TEST_DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE_NAME
  })
}

if (env === 'production') {
  conn = mysqlServer.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  })
}

module.exports = conn
