const express = require('express');
const router=express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
const mysqlconnection = require('../connection');
router.post('/',function(req,res) {
  var sql="select PASSWORD FROM users where PHONE="+"'"+req.body.phone+"'";
  mysqlconnection.query(sql,function (err, result,fields){
    if(err)
    {
      res.status(404).send();
    }
    else
    {
      console.log(result);
      for(var i=0;i<result.length;i++){
        if(req.body.password===result[i].PASSWORD)
      {
        res.status(200).send();
      }
      else {
        res.status(400).send();
      }}
    }
  });
});
module.exports=router;
