//require tailor_controller
const tailorController = require("../controller/tailors_controller");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("./main/home");
    });
    app.get("/tailors", tailorController.viewAllTailors);
    app.get("/tailors/add", tailorController.viewAddTailor);
    app.get("/tailors/:id", tailorController.viewTailor);
    app.get("/tailors/update/:id", tailorController.viewUpdateTailor);

    app.post("/add", tailorController.addTailor);
    app.post("/update/:id", tailorController.updateTailor);
    app.post("/delete/:id", tailorController.deleteTailor);
}

//GET
// Create tailor :/tailors/add, tailorController.viewAddTailor
// Read tailor : /tailors/:id, tailorController.viewTailor
// Update tailor :/tailors/update/:id, tailorController.viewUpdateTailor

//POST
// Create : /add, tailorController.addTailor
// Update : /update/:id, tailorController.updateTailor
// Delete : /delete/:id, tailorController.deleteTailor
