const express = require('express')

const CustomerController = require('../controllers/customerController')

const customers = express()

customers.get("/", CustomerController.getAllCustomer)
customers.post("/login", CustomerController.postLogin)
customers.post('/register', CustomerController.postRegister)



module.exports = customers