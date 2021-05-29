const app = require('express').Router()
const postModel = require('../models/posts.model')
const auth = require('../middleware/auth')
const profileController = require('../controller/profileController')

app.get('/profile',auth.home,profileController.profilemain)
app.post('/delete',profileController.pdelete)
app.post('/editNote',profileController.pedit)
 
module.exports = app