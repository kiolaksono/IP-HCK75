const router = require('express').Router()

const vehicles = require('./vehicle')

router.use('/vehicles', vehicles)

module.exports = router