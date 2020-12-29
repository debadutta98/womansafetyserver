const express = require('express');
const router=express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
const mysqlconnection = require('../connection');
router.post("/",function(req,res) {
  var sql="DELETE FROM location WHERE ID="+"'"+req.body.id+"'";
  mysqlconnection.query(sql,function (err, result,fields){
if(err)
{
//  console.log(err);
  res.status(404).send();
}
else {
  var sql1="DELETE FROM users WHERE ID="+"'"+req.body.id+"'";
  mysqlconnection.query(sql1,function (err, result,fields){
if(err)
{
  console.log(err);
  res.status(404).send();
}
else {
  res.status(200).send();
}
  })
}
  })
})
module.exports=router;
