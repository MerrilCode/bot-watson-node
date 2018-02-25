var restify = require('restify');
var builder = require('botbuilder');
var http = require('http');
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

});
