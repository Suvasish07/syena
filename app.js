const express = require('express');
const bodyParser = require('body-parser');




const app = express();

const port = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.send("Welcome to nodejs");
})






app.listen(port,()=>{
    console.log("server is running at port : " +port);
});