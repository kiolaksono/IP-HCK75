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

    static async deleteTransaction(req,res,next){
        try {
            const {id} = req.params
            console.log(id,"<<<<<<+++++")
            const find = await Transaction.findByPk(id)

            if(!find) next({name:"NotFound", message:"Transaction not found!"})

            await find.destroy()

            res.status(200).json({ message: `Transaction has been deleted` })

        } catch (error) {
            next(error)
        }
    }

    static async postNewTransaction(req,res,next){
        try {
            const {id} = req.user

            const postTransaction = await Transaction.create({...req.body, CustomerId:id})

            res.status(201).json({data: postTransaction, message:`New transaction has been inputed`})
        } catch (error) {
            next(error)
        }
    }

    static async getTransactionByCustomerId(req,res,next){
        try {
            const {id} = req.user
            const data = await Transaction.findAll({
                include:[
                    {
                        model: Customer,
                        attributes:["fullName", "avatar"]

                    },
                    {
                        model : Vehicle,
                        attributes : ["name","image"]
                    }
                ],
                where:{CustomerId:id},
                order:[ ["status", "asc"], ["createdAt", "desc"],]
            })

            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async updateStatus(req,res,next){
        try {
            const {id} = req.params

            const data = await Transaction.findByPk(id)

            if(!data) throw({name:"NotFound", message:"Content not found"})
            
            await data.update(req.body)

            res.status(200).json({message:`Transaction for id ${id} has been updated`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = TransactionController