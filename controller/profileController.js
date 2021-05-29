const postModel = require('../models/posts.model')


module.exports.profilemain = async (req,res)=>{

    let posts = await postModel.find({userId:req.session.userId}).populate('userId','fname lname userName -_id')
    res.render('profile',{posts,information:req.session.fullName,username:req.session.userName})
}
module.exports.pdelete = async (req,res)=>{
    await postModel.findByIdAndDelete({ _id : req.body.delete})
    res.redirect('/profile')
}

module.exports.pedit = async(req,res)=>{
    const {_id,title,desc} = req.body
    await postModel.findByIdAndUpdate({_id},{title,desc})
    res.redirect('/profile')
}