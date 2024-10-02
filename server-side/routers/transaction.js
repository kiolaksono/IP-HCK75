const express = require('express')
const TransactionController = require('../controllers/transactionController')


const transactions = express.Router()

transactions.get("/", TransactionController.getTransaction)
transactions.post("/", TransactionController.postNewTransaction)
transactions.patch("/:id", TransactionController.updateStatus)
transactions.get("/:CustomerId", TransactionController.getTransactionByCustomerId)
transactions.get("/:CustomerId/:id", TransactionController.getTransactionByCustomerIdAndId)

module.exports = transactions