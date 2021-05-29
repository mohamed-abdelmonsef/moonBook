const app = require('express').Router()
const validation = require('../validators/login.valid')
const auth = require('../middleware/auth')
const indexController = require('../controller/indexController')

app.get('/',auth.logging,indexController.indexMain)
app.post('/handleLog',validation,indexController.logging)


module.exports = app