const {Customer} = require('../models')

class CustomerController {
    static async getAllCustomer(req,res,next){
        try {
            const data = await Customer.findAll({
                attributes:{
                    exclude:["password"]
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CustomerController