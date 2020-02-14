const express = require('express');
const bodyParser = require('body-parser');




const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+ '/dist/Frontend'));


app.get("/",(req,res)=>{
    res.send("Welcome to nodejs in heroku app developemnt..............");
})






app.listen(port,()=>{
    console.log("server is running at port : " +port);
});