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

    static async getCustomerById(req,res,next){
        try {
            const {id} = req.params
            const find = await Customer.findByPk(id, {
                attributes:{
                    exclude:["password"]

                }
            })
            
            if(!find) throw({name:"NotFound", message:"Customer no found"})

            res.status(200).json(find)
            
        } catch (error) {
            next(error)
        }

    }

    static async updateCustomerById(req,res,next){
        try {
            const {id} = req.params
            const find = await Customer.findByPk(id)

            if(!find) throw({name:"NotFound", message:"Customer no found"})

            await find.update(req.body, {where:{id}})

            res.status(200).json({message: `Customer with id ${id} has been updated`})

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

    static async postRegister(req,res,next){
        try{

            const {fullName, email, password, avatar} = req.body

            await Customer.create(req.body)

            res.status(201).json(`New account with email ${email} has created`)
        }catch(error){
            next(error)
        }
    }
}

module.exports = CustomerController