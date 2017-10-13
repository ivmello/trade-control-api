const Strategy = require('../models/strategy')

const routes = (server) => {
  // GET index
  server.get('/strategy', (req, res, next) => {
    console.log(Strategy)
    Strategy.then((result) => {
      res.json({ data: result })
      next()
    }).catch(err => {
      res.json(err)
      next()
    })
  })

  // POST create
  server.post('/strategy', (req, res, next) => {
    const { title, description, value } = req.body
    res.json({
      params: {
        title,
        description,
        value
      }
    })
    next()
  })
}

module.exports = routes
