const {Vehicle} = require('../models')

class VehicleController{
    static async getPubVehicle(req, res, next){
        try{
            const data = await Vehicle.findAll()
            // console.log(data)
            res.status(200).json(data)
        }catch(error){
            next(error)
        }
    }

    static async getVehicle(req, res, next){
        try{
            const data = await Vehicle.findAll()
            res.status(200).json(data)
        }catch(error){
            // console.log(error)
            next(error)
        }
    }
}

module.exports = VehicleController