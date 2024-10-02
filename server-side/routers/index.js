const router = require('express').Router()
const CustomerController = require("../controllers/customerController")

const customers = require('./customer')
const vehicles = require('./vehicle')
const transactions = require('./transaction')

router.post("/login", CustomerController.postLogin)
router.post('/register', CustomerController.postRegister)

router.use('/vehicles', vehicles)
router.use('/customers', customers)
router.use('/transactions', transactions)

module.exports = router