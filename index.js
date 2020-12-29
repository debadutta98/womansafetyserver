const express = require('express');
 const mysql = require('mysql');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const connection = require('./connection');
//
const fast2sms = require('fast-two-sms')
 require('dotenv').config();
//
var location=require('./routes/Location');
var details=require('./routes/profileDetail');
var s=require('./routes/signup');
var gps=require('./routes/Gps');
var check=require('./routes/checkUser');
var sendlocation=require('./routes/currentLocation');
var change=require('./routes/change');
var changeImage=require('./routes/uploadImage');
var deleteAccount=require('./routes/DeleteAccount');
//routes
app.use('/delete',deleteAccount);
app.use('/upload',changeImage);
app.use('/location',location);
app.use('/password',change);
app.use('/gpslocation',gps);
app.use('/details',details);
app.use('/login',check);
app.use('/signup',s);
app.use('/currentLocation',sendlocation);
//
//sending  maasages

app.post('/send', async (req,res) => {
var numbers=req.body.numberlist.substring(1,req.body.numberlist.length-1).split(',');
console.log(numbers);
var options = {authorization : process.env.YOUR_API_KEY , message :req.body.msg ,flash:1,numbers :numbers}
const response=await fast2sms.sendMessage(options).then(response=>{
      console.log(response)
    });
})

app.get('/',function(req,res) {
  res.send('hello');
})
//set port
app.set('port',process.env.PORT || 3000);
app.listen(app.get('port'));
