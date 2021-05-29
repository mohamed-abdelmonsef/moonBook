const postModel = require('../models/posts.model')
const app = require('express').Router()
const auth =require('../middleware/auth')
const homeContrller =require('../controller/homeController')

app.get('/home',auth.home,homeContrller.home)
app.post('/addPost',homeContrller.addPost)
app.get('/logout',homeContrller.logout)



module.exports = app