const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    userName:String,
    email:String,
    password:String
})

module.exports = mongoose.model('user', userSchema)