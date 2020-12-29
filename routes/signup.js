const express = require('express');
const router=express.Router();
const bodyparser = require('body-parser');
router.use(bodyparser.json());
const mysqlconnection = require('../connection');
router.post("/",function(req,res) {

  var obj=[req.body.id,req.body.url,req.body.name,req.body.gender,req.body.phone,req.body.address,req.body.password];
  var sql = "INSERT INTO users (ID,URL,NAME,GENDER,PHONE,ADDRESS,PASSWORD) VALUES (?,?,?,?,?,?,?)";
  mysqlconnection.query(sql,obj,function (err, result) {
    if (err)
    {
    //  console.log(obj);
      console.log("err");
      res.status(404).send();
    }
    else{
      console.log(obj);
      console.log("1 record inserted in users table");
      var obj1=[req.body.id,req.body.name,0.0,0.0,req.body.url];
      var sql1="INSERT INTO location (ID,NAME,LAT,LOG,URL)VALUES(?,?,?,?,?)";
      mysqlconnection.query(sql1,obj1,function(err,result) {
        if(err)
        {
          console.log(err);
          res.status(404).send();
        }
        else {
          console.log("location record inserted");
          res.status(200).send();
        }
      })
    }
  });

});
module.exports=router;
