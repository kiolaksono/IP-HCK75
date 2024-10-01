const express = require('express')

const CustomerController = require('../controllers/customerController')

const customers = express()

customers.get("/", CustomerController.getAllCustomer)
customers.post("/login", CustomerController.postLogin)


module.exports = customers