const app = require('express').Router()
const validation = require('../validators/setting.valid')
const auth = require('../middleware/auth')
const settingController = require('../controller/settingController')

app.get('/setting',auth.home,settingController.settingmain)
app.post('/handlesetting',validation,settingController.settingmethod)

module.exports = app  