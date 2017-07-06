const Tailor = require("../models/TailorShops");
module.exports = {
    viewAllTailors(req, res){
        Tailor.find({}, (err, tailors) => {
            if (err){
                console.log(err);
            }else{
                res.render("./tailors/all", {tailors: tailors});
            }
        })
    },
    viewAddTailor(req, res){
        res.render("./tailors/add");
    },
    viewTailor(req, res){
        Tailor.findById({_id: req.params.id}, (err, tailor) => {
            if (err){
                console.log(err)
            }else{
                res.render("./tailors/profile", {tailor: tailor})
            }
        })
    },
    viewUpdateTailor(req, res){
        Tailor.findById({_id: req.params.id}, (err, tailor) => {
            if (err){
                console.log(err)
            }else{
                res.render("./tailors/update", {tailor: tailor})
            }
        })
    },
    addTailor(req, res){
        Tailor.create(req.body, (error, record) => {
            if (error){
                console.log(error)
            } else {
                console.log(record);
                res.redirect("/tailors");
            }
        })
    },
    updateTailor(req, res){
        Tailor.findByIdAndUpdate({_id: req.params.id}, req.body, (error, record) => {
            if (error){
                console.log(error)
            }else{
                console.log(record);
                res.redirect("/tailors/" + record._id)
            }
        })
    },
    deleteTailor(req, res){
        Tailor.findByIdAndRemove({_id: req.params.id}, (err, record) => {
            if (err){
                console.log(err)
            } else {
                console.log("Record Deleted");
                res.redirect('/tailors')
            }
        })
    }
}

//GET
// Create tailor :/tailors/add => /tailors/:id
// Read tailor : /tailors/:id = > /tailors/update/:id OR /tailors/detele/:id
// Update tailor :/tailors/update/:id => /tailors/
// Delete tailor :/tailors/detele/:id => /tailors/

//POST
// Create : /add
// Update : /update/:id
// Delete : /delete/:id
