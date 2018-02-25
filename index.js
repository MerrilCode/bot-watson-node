var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const port = 3000;
const hostname = "172.31.20.173";
var app = express();

// var logger = function (req,res,next) {
// 	console.log('Logging...');
// 	next();
// }
//app.use(logger);

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

//set static path

app.use(express.static(path.join(__dirname,'public')));

var person = {
	name: 'Jeff',
	age: 30
}

app.get('/',function(req,res){
	res.json(person);
});
app.listen(port,hostname,function(){
	console.log('server started on port 3000...');
});

