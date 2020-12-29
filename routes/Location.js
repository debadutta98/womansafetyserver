const express = require('express');
const router=express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
const mysqlconnection = require('../connection');
router.post("/",function(req,res) {
var sql="UPDATE location SET LOG ="+"'"+req.body.log+"'"+","+"LAT="+"'"+req.body.lat+"'"+"WHERE ID ="+"'"+req.body.id+"'";
console.log(sql);
  mysqlconnection.query(sql,function (err, result,fields){
    if(err)
    {
      res.status(404).send();
    }
    else {

      res.status(200).send();
    }
  })
})

module.exports=router;
