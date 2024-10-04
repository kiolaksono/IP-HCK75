const express = require('express')
const authentication = require('../middlewares/authentication')

const CustomerController = require('../controllers/customerController')

const customers = express()

customers.use(authentication)
customers.get("/", CustomerController.getAllCustomer)
customers.get("/profile", CustomerController.getProfileCustomer)





module.exports = customers