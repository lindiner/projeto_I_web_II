const express = require('express');
const router = express.Router();

const SerieController = require('../controllers/SerieController')

router.post('/cserie', SerieController.create)
router.put('/upserie/id', SerieController.update)
router.delete('/cserie/id', SerieController.delete)

module.exports = router;