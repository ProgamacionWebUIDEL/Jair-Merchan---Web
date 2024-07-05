var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://mongodb:27017/test');

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado MongoDb');
});
module.exports=connection
