const express =  require('express');
const app  =  express();
const PORT  = 4000;
const hai ="Hai Rakesh"
app.get('/hai',(req,res)=>{
    console.log("hello world");
    res.send(hai);
})


app.listen(PORT,()=>{
    console.log("Server is Running");
})