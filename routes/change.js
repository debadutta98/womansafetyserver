const express = require('express');
const router=express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
const mysqlconnection = require('../connection');
router.post('/',function(req,res) {
  //var sql="Update users SET PASSWORD="+"'"+req.body.updatepassword+"'"+"WHERE PASSWORD="+"'"+req.body.password+"'"+"AND PHONE"+"'"+req.body.phone"'";
  var sql=req.body.sql;
  mysqlconnection.query(sql,function (err, result,fields){
if(err)
{
  console.log(err);
  res.status(404).send();
}
else {
  res.status(200).send();
}
  })
})
module.exports=router;
