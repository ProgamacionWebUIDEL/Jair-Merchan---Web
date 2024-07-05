var express = require('express');
var router = express.Router();
const Class = require("../Models/class");

/* GET users listing. */
router.post('/create', async function(request, response) {
    console.log("Request from client", request.body);
    const newclass = new Class(request.body);
    await newclass.save();
    response.status(200).json({ code: "Ok", message: "Todo muy bien", data:newclass});
});
  
router.get('/list', async function(request, response) {
    const listClass = await Class.find();
    response.status(200).json({ code: "Ok", message: "Todo muy bien", data:listClass});
});

router.post('/getonly', async function(request, response) {
    console.log("Request from client", request.body.id);
    const newclass = await Class.findOne({_id:request.body.id});
    response.status(200).json({ code: "Ok", message: "Todo muy bien", data:newclass});
});

module.exports = router;
