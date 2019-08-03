var mongoose = require("mongoose");
var Schima =mongoose.Schema;

var testschema=new Schima({
    first_name:String,
    last_name:String,
    phone:String
})

module.exports=mongoose.model('tester',testschema);
