const express = require('express')
const router = express.Router()
const foodKindController =   require('../controllers/foodKind.controller');
// Create a new data row
router.post('/', foodKindController.create);
router.get('/', foodKindController.readAll);
module.exports = router