const express = require('express')
const router = express.Router()
const farmerDataController =   require('../controllers/farmerData.controller');
// Create a new data row
router.post('/', farmerDataController.create);
router.get('/', farmerDataController.readAll);
module.exports = router