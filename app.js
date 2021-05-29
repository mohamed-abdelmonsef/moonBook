const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.set('view engine','ejs')
var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
    uri: 'mongodb+srv://admin:admin@cluster0.srnvy.mongodb.net/moonbook',
    collection: 'mySessions'
  });
var flash = require('connect-flash');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
  }))

app.use(flash())
app.use(require('./routes/register.routes'))
app.use(require('./routes/index.routes'))
app.use(require('./routes/home.routes'))
app.use(require('./routes/setting.routes'))
app.use(require('./routes/profile.routes'))

app.get('*',(req,res)=>{
  res.send('404 page not found')
 })

mongoose.connect('mongodb+srv://admin:admin@cluster0.srnvy.mongodb.net/moonbook', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('CONNECTED');
}).catch(()=>{
    console.log('DB eror');
})
app.listen(process.env.PORT || 3000,()=>{
    console.log('SERVER IS WORKING');
})