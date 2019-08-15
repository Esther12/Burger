var connection = require("./connection");


var orm = {
    selectAll : function(tableName, cb){
        var sqlQuery = "select * from ??";
        connection.query(sqlQuery,[tableName],function(err,data){
            if(err) throw err;
            console.log(data);
            cb(data);
        })
    },
    insertOne : function(tableName,colName,colValue,cb){
        var sqlQuery = "insert into ?? (??) values (?)";
        connection.query(sqlQuery,
            [tableName,colName,colValue],
            function(err,data){
                if(err) throw err;
                console.log(data);
                cb(data);
            });
    },
    updateOne : function(tableName,colValue,id,cb){
        console.log(tableName,colValue,id);
        var sqlQuery = "update ?? set devoured = ? where id = ?";
        connection.query(sqlQuery,
            [tableName,colValue,id],
            function(err,data){
                if(err) throw err;
                console.log(data);
                cb(data);
            });
    }
}

module.exports = orm;