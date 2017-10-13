const HomeRoutes = require('./home')
const StrategyRoutes = require('./strategy')

const routes = (server) => {
  HomeRoutes(server)
  StrategyRoutes(server)
}

module.exports = routes
