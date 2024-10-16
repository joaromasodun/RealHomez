const express = require('express')
const router = express.Router()

const propertyController = require('../controllers/propertyController')
const authController = require('../controllers/authController')

router.post('/create-property', propertyController.createProperty)
router.get('/get-all-properties', propertyController.getAllProperties)
router.route('/:id')
  .get(propertyController.getPropertyById)
  .patch(authController.protect, propertyController.updatePropertyById)


module.exports = router