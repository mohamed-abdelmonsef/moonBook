const userModel = require('../models/user.model')
const bcrypt =require('bcrypt')
const {validationResult} = require('express-validator')

module.exports.registermain = (req,res)=>{
    res.render('register',{errors : req.flash('error'), oldInputs :req.flash('oldInputs')
    ,exist:req.flash('exist')})
}

module.exports.registeration = async(req,res)=>{
    
    const {fname,lname,userName,email,password} = req.body
    let errors = validationResult(req)
    if(errors.isEmpty()){
        var user = await userModel.findOne({email})
        if(user == null){
            bcrypt.hash(password, 7, async function(err,hash){
                await userModel.insertMany({
                    fname,
                    lname,
                    userName,
                    email,
                    password:hash
                })
            })
            res.redirect('/')
        }else{
            req.flash('exist' ,{email})
            res.redirect('/register')
        }
    
    }else{

        req.flash('error',errors.array())
        req.flash('oldInputs',{fname,lname,userName,email,password})
        res.redirect('/register') 
    }

}