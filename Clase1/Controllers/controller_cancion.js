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

router.get('/listar', async (req, res) => {
    try {
      const canciones = await cancion.find({});
      res.status(200).json(canciones);
    } catch (err) {
      console.error('Error al listar las canciones:', err);
      res.status(500).json({ error: 'Ocurrió un error al obtener las canciones.' });
    }
  });

  router.put('/actualizar/:id', async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
  
    try {
      const cancionActualizada = await cancion.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!cancionActualizada) {
        return res.status(404).json({ error: 'Canción no encontrada' });
      }
  
      res.status(200).json(cancionActualizada);
    } catch (err) {
      console.error('Error al actualizar la canción:', err);
      res.status(500).json({ error: 'Ocurrió un error al actualizar la canción.' });
    }
  });
  
  router.delete('/eliminar/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const cancionEliminada = await cancion.findByIdAndDelete(id);
  
      if (!cancionEliminada) {
        return res.status(404).json({ error: 'Canción no encontrada' });
      }
  
      res.status(200).json({ message: 'Canción eliminada exitosamente' });
    } catch (err) {
      console.error('Error al eliminar la canción:', err);
      res.status(500).json({ error: 'Ocurrió un error al eliminar la canción.' });
    }
  });
  
  
module.exports = router;




