var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var nombre=req.query.nombre;
  res.send('Hola' +nombre+ 'como estas');
});

router.post('/id', function(req, res, next) {
  console.log(req.body);
  var nombre=req.body.nombre;
  res.send('Hola'+'-' +nombre+'-'+ 'como estas');
});

router.post('/suma', function(req, res, next) {
  console.log(req.body);
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var suma = num1 + num2;
  res.send('La suma es:'+ suma );
});


router.post('/contador', function(req, res, next) {
  console.log(req.body);
  var name = req.body.name;
  var numLetters = name.length;
  function countVowelsAndConsonants(str) {
    var vowels = 0;
    var consonants = 0;
    for (var i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase();
      if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        vowels++;
      } else if (char.match(/[a-z]/i)) { 
        consonants++;
      }
    }
    return { vowels: vowels, consonants: consonants };
  }
  var counts = countVowelsAndConsonants(name);
  res.send('El nombre tiene ' + numLetters + ' letras, ' + counts.vowels + ' vocales y ' + counts.consonants + ' consonantes.');
});





module.exports = router;
