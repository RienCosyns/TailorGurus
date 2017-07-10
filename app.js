const express = require('express')
const app = express()
const customer = require('./routes/customerRoute')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/customer_database',{
    useMongoClient: true
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.use('/customer',customer)




app.listen(3000, ()=>{
    console.log('server is on port 3000')
})