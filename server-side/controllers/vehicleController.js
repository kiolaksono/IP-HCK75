const {Vehicle} = require('../models')

class VehicleController{
    static async getAllVehicle(req, res, next){
        try{
            const data = await Vehicle.findAll()
            // console.log(data)
            res.status(200).json(data)
        }catch(error){
            // next(error)
            res.json(error)
        }
    }
}

module.exports = VehicleController