const express = require('express'),
    router = express.Router(),
    cancion = require('../Controllers/controller_cancion');

router.use('/canciones',cancion);
module.exports=router;