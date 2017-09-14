const express = require('express')

module.exports = function(server){

  //API Routes
  const router = express.Router()
  server.use('/api', router)

  //TODO Routes
  const agendaServer = require('../api/tudo/agendaServer')
  agendaServer.register(router, '/todos')

}
