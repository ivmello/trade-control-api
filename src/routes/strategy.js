const db = require('../models')

const routes = (server) => {
  // GET index
  server.get('/strategy', (req, res, next) => {
    db.models.strategy.all().then((result) => {
      res.json({ result })
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
