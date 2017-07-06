const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/tailors");
const port = 3000;

//database
mongoose.connect("mongodb://localhost/tailorgurus", {
    useMongoClient: true
})

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));

routes(app);

app.listen(port, () => {
    console.log("Server listening on port " + port);
})