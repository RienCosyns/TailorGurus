const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CustomerSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: Number
})

module.exports = mongoose.model('Customers', CustomerSchema)