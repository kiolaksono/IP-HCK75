const express = require('express')

const CustomerController = require('../controllers/customerController')

const customers = express()

customers.get("/", CustomerController.getAllCustomer)

module.exports = customers