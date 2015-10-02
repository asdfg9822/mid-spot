var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// URI : /company
var company = require('./routes/company');
app.use('/company', company);

// URI : /table
var table = require('./routes/table');
app.use('/table', table);

// URI : /
app.get('/', function (req, res) {
	res.send('Hello World! This Page is Default Page. You Must Be Connect "company_info_write.html" ');
});

var server = app.listen(8888, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('서버 실행 중: http://%s:%s', host, port);
});
