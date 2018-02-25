var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const port = 3000;
const hostname = "172.31.20.173";
var app = express();

app.get('/',function(req,res){
	res.send('hello world');
});
app.listen(port,hostname,function(){
	console.log('server started on port 3000...');
});

