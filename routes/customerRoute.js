const express = require('express')
const router = express.Router()
const customerController = require('../controller/customer_controller')


router.get('/', customerController.viewCustomer)
router.get('/add', customerController.createCustomer)
router.get('/:id', customerController.viewSingleCustomer)

router.post('/', customerController.createNewCustomer)

module.exports = router