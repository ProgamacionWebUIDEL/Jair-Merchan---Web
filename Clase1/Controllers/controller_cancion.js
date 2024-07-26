var cancion = require('../Models/cancion'),
    express=require('express'),
    router=express.Router();

router.post('/crear',(req,res)=>{
    var body = req.body;
    console.log('llego hasta aqui');
    cancion.insertMany({
        nombre:body.nombre,
        autor:body.autor,
        artista:body.artista,
        genero:body.genero,
        duracion:body.duracion,
        fotografia:body.fotografia,
        letra:body.letra,
        anio_lanzamiento:body.anio_lanzamiento,

    },).then(function (){
        res.status(200).json('Datos Guardados');
        console.log("Successfully saved default items to DB");
    })
    .catch(function (err){
        console.log(err);
        throw err;
    });;
});

router.get('/listar',(req,res)=>{
    cancion.find({},{
    }).then(function (docs) {
    res.status(200).json(docs)
    }).catch(function (err) {
    console.log(err);
    throw err;
    });
    });


module.exports=router;