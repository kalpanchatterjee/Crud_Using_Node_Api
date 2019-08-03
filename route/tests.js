var express= require("express");
var test=require("../model/test");
var app=express.Router();

app.post('/',(req,res)=>{
    var testing=new test();
    testing.first_name=req.body.first_name;
    testing.last_name=req.body.last_name;
    testing.phone=req.body.phone;
    testing.save((err,test)=>{
         if(err){
          res.send("error");    
         } else{
             res.json(test);
         }
     })



})
app.get('/',(req,res)=>{
    test.find({})
    .exec((err,test)=>{
        if(err){
            res.send("error");
        }else{
            res.json(test);
        }
        
    });
});
app.get('/:id',(req,res)=>{
    
    test.findOne({
        _id: req.params.id
}).exec((err,test)=>{
    if(err){
        res.send(err);
    }else{
        res.json(test);
    }
});
});

app.delete('/:id',(req,res)=>{
    test.findByIdAndRemove({
        _id:req.params.id
    }).exec((err,test)=>{
        if(err){
            res.send(err)
        }else{
            res.json(test)
        }
    })
});


app.put('/:id', function(req,res){
test.findOneAndUpdate({
    _id: req.params.id
},{
    $set:{
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    }
},
{
    $upsert:true
},function(err, test){
    if(err)
    {
        res.send("error occure");
    }else{
        res.send(test);
    }
});


});

module.exports=app;

