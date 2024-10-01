const {Customer} = require('../models')
const {comparePass} = require('../helpers/hash')
const { signToken } = require('../helpers/jwt')

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

    static async postLogin(req,res,next){
        try {
            const {email, password} = req.body

            if (!email) throw ({ name: "BadRequest", message: "Email is required" })
            if (!password) throw ({ name: "BadRequest", message: "Password is required" })    

            const find = await Customer.findOne({where:{email}})
            if(!find) throw ({name:"Bad Request", message:"Invalid username/password"})
            
            // console.log(find)

            const isValidPassword = comparePass(password, find.password)
            
            if(!isValidPassword) throw ({name:"Bad Request", message:"Invalid username/password"})
                
            const accessToken = signToken({id:find.id})
            console.log("SDSD")

            res.status(200).json({accessToken})

        } catch (error) {
            res.json(error)
            // next(error)
        }
    }
}

module.exports = CustomerController