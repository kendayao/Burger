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

    console.log(burgerObj)

    res.render("index",burgerObj)
});

});
router.post

router.put

// if (result.changedRows == 0) {
//     // If no rows were changed, then the ID must not exist, so 404
//     return res.status(404).end();
//   } else {
//     res.status(200).end();
//   }


router.delete

// if (result.affectedRows == 0) {
//     // If no rows were changed, then the ID must not exist, so 404
//     return res.status(404).end();
//   } else {
//     res.status(200).end();
//   }




// Export routes for server.js to use.
module.exports = router;