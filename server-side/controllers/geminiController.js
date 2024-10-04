const gemini = require("../helpers/gemini")

class GeminiController{
    static async postPrompts(req,res,next){
        try {

            const {employeeName} = req.body
            let result = await gemini(employeeName)
            res.status(201).json(result)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}

module.exports = GeminiController