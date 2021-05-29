const { model } = require("mongoose")

module.exports.home = (req,res,next)=>{
    if(req.session.isLogged){
        next()
    }else{
        res.redirect('/')
    }
}

module.exports.logging = (req,res,next)=>{
    if(req.session.isLogged){
        res.redirect('/home')
    }else{
        next()
    }
}

