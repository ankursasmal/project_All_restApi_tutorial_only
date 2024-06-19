let mongoose=require('mongoose');
// let validator=require('validator')
let cresteSchema=new mongoose.Schema({
    name:{
type:String,
required:true,
unique:true
    },
    email:{
type:String ,
required:true
,unique:true


},
     pass:{
        type:String,
     },
    speed:{
        type:Number,     
           required:true


    },
    rank:{
        type:Number,
        unique:true,
        required:true
    }

})

let raceCollection=new mongoose.model('raceCollection',cresteSchema);

module.exports=raceCollection;