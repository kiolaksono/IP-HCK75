const router = require('express').Router()
const CustomerController = require("../controllers/customerController")

const customers = require('./customer')
const vehicles = require('./vehicle')
const transactions = require('./transaction')
const VehicleController = require('../controllers/vehicleController')
const authentication = require('../middlewares/authentication')
const errorHandler = require('../middlewares/errorHandler')

router.get("/", VehicleController.getPubVehicle)
router.post("/login", CustomerController.postLogin)
router.post('/register', CustomerController.postRegister)
router.post("/auth/google", CustomerController.postGoogleAuth)

router.use('/customers', customers)

router.use(authentication)
router.use('/vehicles', vehicles)
router.use('/transactions', transactions)

router.use(errorHandler)

module.exports = router