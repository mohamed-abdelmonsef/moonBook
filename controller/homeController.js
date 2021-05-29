const postModel = require('../models/posts.model')


module.exports.home = async(req,res)=>{
    let posts = await postModel.find({}).populate('userId','fname lname -_id')
    res.render('home',{posts,username:req.session.userName})
}


module.exports.addPost = async(req,res)=>{
    const{title,desc} = req.body
    var postDate = Date.now('day')
    await postModel.insertMany({title,desc, myDate:postDate ,userId : req.session.userId})
    res.redirect('/home')
}

module.exports.logout = (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
}