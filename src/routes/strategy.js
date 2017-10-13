const db = require('../models')

const routes = (server) => {
  // GET index
  server.get('/strategy', async (req, res, next) => {
    try {
      res.json(
        await db.models.strategy.all()
      )
      next()
    } catch (err) {
      res.json(err)
    }
  })

  // POST create
  server.post('/strategy', async (req, res, next) => {
    try {
      res.json(
        await db.models.strategy.create(req.body)
      )
      next()
    } catch (err) {
      res.json(err)
    }
  })

  // PUT update
  server.put('/strategy/:id', async (req, res, next) => {
    const id = req.params.id
    try {
      res.json(
        await db.models.strategy.update(id, req.body)
      )
      next()
    } catch (err) {
      res.json(err)
    }
  })

  // DELETE update
  server.del('/strategy/:id', async (req, res, next) => {
    const id = req.params.id
    try {
      res.json(
        await db.models.strategy.destroy(id)
      )
      next()
    } catch (err) {
      res.json(err)
    }
  })
}

module.exports = routes
