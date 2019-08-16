var mysql = require("mysql");
var connection;

// if(process.env.JAWSDB_URL){
//     console.log(process.env.JAWSDB_URL);
//         connection = mysql.createConnection(process.env.JAWSDB_URL);
// }else{
//         connection = mysql.createConnection({
//             host : "localhost",
//           //  port : 3306,
//             user : "root",
//             password : "123456",
//             database : "burgers_db"  
//     });
// };

connection = mysql.createConnection({
                host : "lo677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
                port : 3306,
                user : "gpzn3489klaa40cg",
                password : "s6ykok69xain9ac5",
                database : "a8q9x2rdonf7bbnu"  
        });


connection.connect(function(err,res){
    if(err) throw err;
    console.log("connected ad id : " + connection.threadId);
});

module.exports = connection;