// Schema =>
// name : String
// location : String
// email : String
// price : $tring
const mongoose = require("mongoose");
const TailorSchema = mongoose.Schema({
    name: String,
    location: String,
    email: String,
    price: String
})

let Tailor = mongoose.model("Tailor", TailorSchema);
module.exports = Tailor;