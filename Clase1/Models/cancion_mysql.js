// Modelo para Mysql
var Mysql = require('Mysql');
Schema = Mysql.Schema;

var cancion = new Mysql.Schema({
    nombre:{type:String},
    autor:{type:String},
    artista:{type:String},
    genero:{type:String},
    duracion:{type:Number},
    fotografia:{type:Object},
    letra:{type:String},
    anio_lanzamiento:{type:Number},

});

var cancionm = Mysql.model('cancionm',cancion);
module.exports=cancionm;