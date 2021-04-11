const express = require('express')
const router = express.Router()
const foodController =   require('../controllers/food.controller');
// Create a new data row
router.post('/', foodController.create);
router.get('/', foodController.readAll);
module.exports = router