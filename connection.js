const express = require('express');
 const mysql = require('mysql');
const router=express.Router();
var con = mysql.createConnection({
  host: "bxo3kkcktcigxuptdpnn-mysql.services.clever-cloud.com",
  user: "uhobdlssmazmxjdd",
  password: "JyLsjxbhNpp5XjjYRsmZ",
  database: 'bxo3kkcktcigxuptdpnn',
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
