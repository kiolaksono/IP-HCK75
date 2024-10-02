const {Transaction, Customer, Vehicle} = require('../models')

class TransactionController{
    static async getTransaction(req,res,next){
        try {
            const data = await Transaction.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async postNewTransaction(req,res,next){
        try {
            // const {CustomerId, VehicleId, EmployeeId} = req.params

            const postTransaction = await Transaction.create({...req.body})

            res.status(201).json({data: postTransaction, message:`New transaction has been inputed`})
        } catch (error) {
            next(error)
        }
    }

    static async getTransactionByCustomerId(req,res,next){
        try {
            const {CustomerId} = req.params
            const data = await Transaction.findAll({
                include:[
                    {
                        model: Customer,
                        attributes:["fullName", "avatar"]

                    },
                    {
                        model : Vehicle,
                        attributes : ["name"]
                    }
                ],
                where:{CustomerId:CustomerId}
            })

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getTransactionByCustomerIdAndId(req,res,next){
        try {
            const {id, CustomerId} = req.params

            const data = await Transaction.findOne({
                include:[
                    {
                        model: Customer,
                        attributes:["fullName", "avatar"]

                    },
                    {
                        model : Vehicle,
                        attributes : ["name"]
                    }
                ],
                where:[{CustomerId:CustomerId},{id:id}]
            })
            
            res.json(data)
        } catch (error) {
            next(error)
        }
    }

    static async updateStatus(req,res,next){
        try {
            const {id} = req.params

            const data = await Transaction.findOne({
                where:{id}
            })
            
            if(!data) throw({name:"NotFound", message:"Content not found"})
            
            await data.update(req.body, {where:{id}})

            res.status(200).json({message:`Transaction for id ${id} has been updated`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TransactionController