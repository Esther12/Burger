var mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL){
    console.log(JAWSDB_URL);
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
        connection = mysql.createConnection({
            host : "localhost",
            port : 3306,
            user : "root",
            password : "123456",
            database : "burgers_db"  
    });
}

connection.connect(function(err,res){
    if(err) throw err;
    console.log("connected ad id : " + connection.threadId);
});

module.exports = connection;