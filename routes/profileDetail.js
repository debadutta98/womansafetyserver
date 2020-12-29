const express = require('express');
const router=express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
const mysqlconnection = require('../connection');
router.post('/',function(req,res) {
var sql="Select ID,Name, ADDRESS ,URL FROM users where PHONE="+"'"+req.body.phone+"'";
mysqlconnection.query(sql,function (err, result,fields){
  if(err)
  {
  //  console.log(err);
    res.status(404).send();
  }
  else {
    res.status(200).send(JSON.stringify(result));
    //console.log(result);
  }
});
})

module.exports=router;
