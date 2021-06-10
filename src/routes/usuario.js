const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController')

router.post('/usuario', UsuarioController.create)


module.exports = router;