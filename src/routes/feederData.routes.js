const express = require('express')
const router = express.Router()
const farmerDataController =   require('../controllers/feederData.controller');
// Create a new data row
router.post('/feederdata', farmerDataController.create);
router.post('/feederdatas', farmerDataController.createMulti);
router.get('/feederdata', farmerDataController.readAll);
module.exports = router