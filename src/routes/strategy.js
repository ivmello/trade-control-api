const db = require('../models')

const routes = (server) => {
  // GET index
  server.get('/strategy', async (req, res, next) => {
    try {
      res.json(
        await db.models.strategy.all()
      )
    } catch (err) {
      res.json(err)
    }
    next()
  })

  // POST create
  server.post('/strategy', async (req, res, next) => {
    try {
      res.json(
        await db.models.strategy.create(req.body)
      )
    } catch (err) {
      res.json(err)
    }
    next()
  })

  // PUT update
  server.put('/strategy/:id', async (req, res, next) => {
    const id = req.params.id
    try {
      res.json(
        await db.models.strategy.update(id, req.body)
      )
    } catch (err) {
      res.json(err)
    }
    next()
  })

  // DELETE update
  server.del('/strategy/:id', async (req, res, next) => {
    const id = req.params.id
    try {
      res.json(
        await db.models.strategy.destroy(id)
      )
    } catch (err) {
      res.json(err)
    }
    next()
  })
}

module.exports = routes
