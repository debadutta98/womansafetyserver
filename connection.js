const express = require('express');
 const mysql = require('mysql');
const router=express.Router();
var con = mysql.createConnection({
  host: "bkwwvo3ayllabkgmkuvw-mysql.services.clever-cloud.com",
  user: "uhobdlssmazmxjdd",
  password: "JyLsjxbhNpp5XjjYRsmZ",
  database: 'bkwwvo3ayllabkgmkuvw',
  multipleStatements:true
  });
  con.on('error', function(err) {
    if(!err)
    {
      console.log("Connected");
    }
    else {
 console.log("[mysql error]",err);
    }
});
module.exports=con;
