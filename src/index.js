require('dotenv').config()
const server = require('./server')

server.listen(8080, () => {
  console.log('%s listening on port %s ', server.name, server.url)
})
