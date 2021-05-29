const app = require('express').Router()
const validation = require('../validators/signUp.valid')
const auth =require('../middleware/auth')
const registerController = require('../controller/registerController')

app.get('/register',auth.logging,registerController.registermain)
app.post('/handleSignUp', validation,registerController.registeration)


module.exports = app