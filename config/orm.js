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
        var sqlQuery = "insert into ?? (??) values (??)";
        connection.query(sqlQuery,
            [tableName,colName,colValue],
            function(err,data){
                if(err) throw err;
                console.log(data);
                cb(data);
            });
    },
    updateOne : function(tableName,colName,colValue,cb){
        var sqlQuery = "updated ?? set devoured = ?? where burger_name = ??";
        connection.query(sqlQuery,
            [tableName,colName,colValue],
            function(err,data){
                if(err) throw err;
                console.log(data);
                cb(data);
            });
    }
}

module.exports = orm;