var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const port = 3000;
const hostname = "172.31.20.173";
var app = express();
const watson_result;

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

var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
	username: "9ffb0650-40a2-49f3-a48f-b22a08d5cf55",
	password: "vlDwy7XuXcm4",
	version_date: '2016-05-19',
	headers: {
	'X-Watson-Learning-Opt-Out': 'true'
	}

});

var params = {
	'tone_input': require('./tone.json'),
	'content_type': 'application/json'
};

tone_analyzer.tone(params,function(error, response){
	if(error)
		console.log('error:', error);
	else
		console.log(JSON.stringify(response, null, 2));
		watson_result = JSON.stringify(response, null, 2);


});

app.get('/',function(req,res){

	res.render('index',{
		title: 'customers',
		watson_result: watson_result
	});
});
app.listen(port,hostname,function(){
	console.log('server started on port 3000...');
});

app.get('/',function(req,res){

	res.render('index',{
		title: 'customers',
	});
});
app.listen(port,hostname,function(){
	console.log('server started on port 3000...');
});
