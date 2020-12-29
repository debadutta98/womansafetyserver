const express = require('express');
const router=express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
const mysqlconnection = require('../connection');
router.post("/",function(req,res){
var sql="select * from location where ID="+"'"+req.body.id+"'";
mysqlconnection.query(sql,function (err, result,fields){
  if(err)
  {
    res.status(404).send();
  }
  else {
    //console.log(result);
    res.status(200).send(JSON.stringify(result));
  }
})
})
module.exports=router;
