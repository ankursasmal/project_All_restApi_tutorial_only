let mongoosh=require('mongoose');

mongoosh.connect("mongodb://localhost:27017/player").then(()=>{
    console.log('connection sucess')
}).catch((e)=>{
console.log(e);
})