var orm = require("../config/orm");

var burgers = {
    all : function (cb){
        orm.selectAll("burgers",function(data){
            cb(data);
        });
    },
    create : function(colName,colValue,cb){
        orm.insertOne("burgers",colName,colValue,function(data){
                cb(data);
        } );
    },
    update : function(colValue,id,cb){
        console.log(colValue,id);
        orm.updateOne("burgers",colValue,id,function(data){
                cb(data);
        } );
    }
}


module.exports = burgers;