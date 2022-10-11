require('dotenv').config();

const express = require('express');

const upfile = require("express-fileupload");

const bodyParser = require('body-parser');
const app = express();
app.use(upfile());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 

const port = process.env.PORT || 7654;

const userRouter = require( "./router/user.router");
app.use(userRouter); 

app.use(express.static("public"));  
app.use(express.static("uploads"));  
app.set("view engine", "ejs"); 


app.use(function(req,res){
    res.status(404).json({message:"404 not found"});
});



app.listen(port,function(){
    console.log("server is running at http://localhost:"+port); 
}); 





