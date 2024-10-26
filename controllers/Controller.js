const People = require("../models/peopleModel");

class Controller {

    static home(req, res){
        res.redirect('/peoples')
    }

    static showAll(req, res){
        People.showAll((err, peoples) => {
            if(err){
                res.send(err);
            }
            else{
                res.render("showAll", { peoples });
            }
        });
        
    }

    static addForm(req, res){
        res.render("addForm");
    }

    static addPost(req, res){
        const { firstname, lastname, age, address, isMale } = req.body; 
        const objPerson = {
            firstname, lastname, age, address, isMale
        }
        People.addPost(objPerson, (err, people) => {
            if(err){
                res.send(err);
            }
            else{
                res.redirect("/peoples");
            }
        });

    }

    static editForm(req, res){
        People.editForm(req.params.id, (err, people) => {
            if(err){
                res.send(err);
            }
            else{
                res.render("editForm", { people } );
            }
        });
        
    }

    static editPost(req, res){
        const { firstname, lastname, age, address, isMale } = req.body; 
        const objPerson = {
            firstname, lastname, age, address, isMale
        }
        People.editPost(req.params.id, objPerson, (err, people) => {
            if(err){
                res.send(err);
            }
            else{
                res.redirect("/peoples");
            }
        });
    }

    static delete(req, res) {
        const id = req.params.id;
        People.deleteById(id, (err) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect("/peoples");
            }
        });
    }


}

// router.get("/", Controller.showAll);

// router.get("/add", Controller.addForm);
// router.post("/add", Controller.addPost);

// router.get("/:id/edit", Controller.editForm);
// router.post("/:id/edit", Controller.editPost);

// router.get("/:id/delete", Controller.delete);

module.exports = Controller;