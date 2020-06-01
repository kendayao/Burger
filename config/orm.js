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
    var query="INSERT INTO " + table + " ("+cols.toString()+") VALUES (?,?)"

    
    connection.query(query, vals, function(data){
        cb(data)
    })
    },

    updateOne: function(table, colValue, condition, cb){
    var query="UPDATE "+table+" SET "+colValue+" WHERE "+condition
    console.log(query)
    connection.query(query, function(data){
        cb(data)
    })
    },

    deleteOne: function(table, condition, cb){
        var query="DELETE FROM "+table + " WHERE "+ condition;
        console.log(query)
        connection.query(query, function(err,result){
            if (err) {
                throw err;
              }
           console.log(result)
            cb(result)
        });
    }

}



module.exports=orm;
