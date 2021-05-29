const bcrypt = require('bcrypt')
const userModel = require('../models/user.model')
const {validationResult} = require('express-validator')
const postModel = require('../models/posts.model')


module.exports.settingmain = async (req,res)=>{
    let posts = await postModel.find({}).populate('userId','fname lname -_id')
    res.render('setting',{errors:req.flash('passErorr'),posts,username:req.session.userName})
}

module.exports.settingmethod = async(req,res)=>{
    let error = validationResult(req)
    const {oldPass,newPass,repeatPass} = req.body
    if(error.isEmpty()){
        let user = await userModel.findOne({_id:req.session.userId})
        const match = await bcrypt.compare(oldPass, user.password);
        if(match){
           bcrypt.hash(newPass,7,async(err,hash)=>{
            await userModel.findByIdAndUpdate({_id:req.session.userId},{password:hash})
           })
           res.redirect('/home') 
        }else{
            console.log('not matching');
            res.redirect('/setting') 
        }
    }else{
        //feedback`
        req.flash('passErorr',error.array())
        res.redirect('/setting') 

    }
}