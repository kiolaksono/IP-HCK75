function authorization(req,res,next){
    try {
        if(!req.user) return next({name:"Unauthorized", message:"Invalid Token"})
        next()
        
    } catch (error) {
        next(error)
    }
}

module.exports = authorization