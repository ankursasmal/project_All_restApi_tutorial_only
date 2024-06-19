
let express=require('express');
let route= new express.Router();
// now collection a paga import for use
let raceCollection=require('../model/reser');

route.get('/',(req,res)=>{
    res.send('ok')
})
route.post('/rank',async(req,res)=>{
    try{
        // create
        let user =new raceCollection(req.body);
        // save
        let usrcollection= await user.save();
         res.status(201).send(usrcollection);
    }
    catch(e){
        res.status(401).send(e);
    }
})

route.get('/rank',async(req,res)=>{
    try{
      let display=  await raceCollection.find();
      if(!display){
        res.status(500).send();
      }
      res.status(200).send(display);
    }
    catch
    (e){
        res.status(400).send(e);
    }
})

route.get('/rank/:id',async(req,res)=>{
    try{
      let display=  await raceCollection.findById({_id:req.params.id});
      if(!display){
        res.status(500).send();
      }
      
      res.status(200).send(display);
    }
    catch
    (e){
        res.status(400).send(e);
    }
})
route.patch('/rank/:id',async(req,res)=>{
    try{
         let updat= await raceCollection.findByIdAndUpdate(req.params.id,req.body,{new:true})
        console.log(req.body);

        res.status(200).send(updat);
    }
    catch
    (e){
        res.status(400).send(e);
    }
})

route.delete('/rank/:id',async(req,res)=>{
    try{
    let deletelist= await raceCollection.findByIdAndDelete(req.params.id);
    res.status(200).send( );
    }
 catch
    (e){
        res.status(400).send(e);
    }
})

module.exports=route;