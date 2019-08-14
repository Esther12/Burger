var orm = require("../config/orm");

var burgers = {
    all : function (cb){
        orm.selectAll("burgers",function(data){
            cb(data);
        });
    },
    create : function(col1Name,col2Name,col1Value,col2Value,cb){
        orm.insertOne("burgers",col1Name,col2Name,col1Value,col2Value,function(data){
                cb(data);
        } );
    },
    update : function(col1Name,col2Name,col1Value,col2Value,cb){
        orm.updateOne("burgers",col1Name,col2Name,col1Value,col2Value,function(data){
                cb(data);
        } );
    }
    

}


module.exports = burgers;