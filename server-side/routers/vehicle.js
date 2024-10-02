const express = require("express")
const VehicleController = require('../controllers/vehicleController')

const vehicles = express.Router()

vehicles.get("/", VehicleController.getVehicle)


module.exports = vehicles