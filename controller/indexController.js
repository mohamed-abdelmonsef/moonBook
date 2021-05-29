const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')
const userModel = require('../models/user.model')


module.exports.indexMain = (req,res)=>{
    res.render('index',{errors:req.flash('errors'),oldInputs:req.flash('oldInputs')
    ,exist:req.flash('exist'),wrongPass:req.flash('wrongPass')})
}

module.exports.logging =  async(req,res)=>{
    const {email,password} = req.body
    let errors = validationResult(req)
    if(errors.isEmpty()){
        var user = await userModel.findOne({email})
        if(user != null){
            var match = await bcrypt.compare(password,user.password)
            if(match){
                req.session.isLogged = true
                req.session.userId =user._id
                req.session.fullName = user.fname +" "+ user.lname
                req.session.userName = user.userName
                res.redirect('/home')
            }else{
                req.flash('wrongPass',{password})
                res.redirect('/')
            }
        }else{
            //feedback
            req.flash('exist' ,{email})
            res.redirect('/')

        }
    }else{
        req.flash('errors',errors.array())
        req.flash('oldInputs',{email,password})
        res.redirect('/')

    }
}