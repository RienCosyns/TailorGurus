const customer = require('../models/customerData')

module.exports = {

    viewCustomer(req, res) {
        customer.find({}, (err, customer) => {
            if (err) {
                console.log(err)
            } {
                res.render('customers/allCust', {customer})
            }
        })
    },
    createCustomer(req, res) {
        res.render('customers/add')

    },
    viewSingleCustomer(req, res) {

    },
    createNewCustomer(req, res) {
        customer.create(req.body, (err, record)=>{
            if(err){
                console.log(err)
            }res.redirect('/customer')
        })
    }
}