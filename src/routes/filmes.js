const express = require('express');
const router = express.Router();

const FilmeController = require('../controllers/FilmeController')

router.get('/', FilmeController.index)
router.post('/cfilmes', FilmeController.create)
router.put('/upfilmes/id', FilmeController.update)
router.delete('/cfilmes/id', FilmeController.delete)

module.exports = router;