const express = require('express')
const router = express.Router()
const locationController =   require('../controllers/location.controller');
// Create a new data row
router.post('/', locationController.create);
router.get('/', locationController.readAll);
module.exports = router