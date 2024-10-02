const { verifyToken } = require("../helpers/jwt")
const { Customer } = require('../models')

async function authentication(req, res, next) {
    const bearerToken = req.headers["authorization"]
    if (!bearerToken) {
        next({ name: "Unauthorized", message: "Invalid Token" })
        return
    }

    const [bearer, token] = bearerToken.split(" ")

    if (!token) {
        next({ name: "Unauthorized", message: "Invalid Token" })
        return
    }

    try {
        const data = verifyToken(token)
        const find = await Customer.findByPk(data.id)

        if (!find) {
            next({ name: "Unauthorized", message: "Invalid Token" })
            return
        }

        req.user = find
        next()
    } catch (error) {
        // console.log(error,)
        next(error)
    }
}

module.exports = authentication