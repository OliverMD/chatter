/**
 * Created by oliver on 13/01/15.
 */
var express = require('express');
var app = express();
var cors = require("cors");

app.use(cors());

app.get('/', function(req, res){
   console.log("Getrequest from: " + req.headers.host);
   res.send("Hello World!");
});
app.get('/messages', function(req,res){

});
var server = app.listen(3000, function () {

   var host = server.address().address;
   var port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port)

});