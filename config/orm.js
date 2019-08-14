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
    insertOne : function(tableName,col1Name,col2Name,col1Value,col2Value,cb){
        var sqlQuery = "insert into ?? (??,??) values (??, ??)";
        connection.query(sqlQuery,
            [tableName,col1Name,col2Name,col1Value,col2Value],
            function(err,data){
                if(err) throw err;
                console.log(data);
                cb(data);
            });
    },
    updateOne : function(tableName,col1Name,col2Name,col1Value,col2Value,cb){
        var sqlQuery = "updated ?? set ?? = ?? , ?? = ?? where ?? = ??";
        connection.query(sqlQuery,
            [tableName,col1Name,col1Value,col2Name,col2Value],
            function(err,data){
                if(err) throw err;
                console.log(data);
                cb(data);
            });
    }
}

module.exports = orm;