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

// View engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//set static path
app.use(express.static(path.join(__dirname,'public')));



app.get('/',function(req,res){

	res.render('index',{
		title: 'customers'
	});
});
app.listen(port,hostname,function(){
	console.log('server started on port 3000...');
});

