var connection = require("../config/connection.js");


var orm={

    selectAll: function(table, cb){
    var query= "SELECT * FROM " + table + ";"
        connection.query(query,function(err,data){
            if (err) throw err;
            cb(data)
        });

    },

    insertOne: function(table, cols, vals, cb){
        

    },

    updateOne: function(table, cols, conition, cb){


    },

}



module.exports=orm;
