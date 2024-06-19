let express=require('express');
let app=express();
// connection alway app.js page must
require("./db/conn");
//  for use router must
 let route=require('./router/Allrout')
let PORT=process.env.PORT || 3000;

// must for use post get request
app.use(express.json())

// router a sab acha middle wear route use korta hob amust
 app.use(route);

app.listen(PORT,()=>{
    console.log('ok all')
})