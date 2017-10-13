const routes = (server) => {
  // GET index
  server.get('/', (req, res, next) => {
    res.json({
      msg: 'Welcome to TradeControl API'
    })
    next()
  })
}

module.exports = routes
