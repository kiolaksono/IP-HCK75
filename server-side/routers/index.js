const router = require('express').Router()

const customers = require('./customer')
const vehicles = require('./vehicle')

router.use('/vehicles', vehicles)
router.use('/customers', customers)

module.exports = router