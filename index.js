var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var port =1400;
var db= 'mongodb://test:r25071995@ds145895.mlab.com:45895/testing';
mongoose.connect(db);
var app= express();
var abc = require('./route/tests');

// middeleware
 app.use(bodyparser.json());
 app.use(bodyparser.urlencoded({
   extended:true,
 }));

// end middeleware


//cross origin start
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/",abc);




app.get('/',function(req,res){
  res.send("route succcesful");
})
app.listen(port,function(req,res){
  console.log("server started"+port);
})