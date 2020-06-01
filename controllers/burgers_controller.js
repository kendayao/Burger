var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/",function(req,res){
burger.selectAll(function(data){
    var burgerObj={
        burgers: data
    };


    res.render("index",burgerObj)
});

});

router.post

router.post("/api/burgers", function(req,res){
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result){

        res.json(result)
    });


});


router.put("/api/burgers/:id", function(req,res){

var condition = "id = "+ req.params.id;
devouredState ="devoured = "+req.body.devoured
burger.updateOne(devouredState, condition, function(result){
    res.send("sent")

});
});




router.delete("/api/burgers/:id", function(req,res){
    var condition="id = "+req.params.id;
    burger.deleteOne(condition, function(result){
        res.send("sent")
    });

});

// if (result.affectedRows == 0) {
//     // If no rows were changed, then the ID must not exist, so 404
//     return res.status(404).end();
//   } else {
//     res.status(200).end();
//   }




// Export routes for server.js to use.
module.exports = router;