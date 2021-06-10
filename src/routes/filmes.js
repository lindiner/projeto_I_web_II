const express = require('express')
const routes = express.Router()

const FilmeController = require('../controllers/FilmeController')

routes.get('/', FilmeController.index)
routes.post('/cfilmes', FilmeController.create)
routes.put('/upfilmes/id', FilmeController.update)
routes.delete('/cfilmes/id', FilmeController.delete)

module.exports = routes