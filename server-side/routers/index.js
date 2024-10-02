const router = require('express').Router()
const CustomerController = require("../controllers/customerController")

const customers = require('./customer')
const vehicles = require('./vehicle')

router.post("/login", CustomerController.postLogin)
router.post('/register', CustomerController.postRegister)

router.use('/vehicles', vehicles)
router.use('/customers', customers)

module.exports = router