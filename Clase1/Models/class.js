const mongoose=require('mongoose');
const classSchema = mongoose.Schema({
    name: {type:String,require:true},
    startDate:{type:String,require:true},
    endDate:{type:String,require:true},
    level:{type:Number,require:true},

});

const Class = mongoose.model('Class',classSchema);
module.exports=Class;
