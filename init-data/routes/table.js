var fs = require('fs');
var path = require('path');
var express = require('express'); //Express Framework Module
var router = express.Router(); //URL Routing Module
var midspot = require('./module/midspot');
var $ = require('jquery');


// URI : /table/create.do
router.all('/create.do', function (request, response) {

	//Cross Origin Resource Sharing Allow
	response.writeHeader(200, {
		"Content-Type": "Application/json",
		"Access-Control-Allow-Origin": "*"
	});

	midspot.db.tbCreate(function () {

		midspot.db.tbShow(function (rows) {
			var data = {
				result: "success"
			}
			data.tables = rows;
			//console.log(data);

			var jsonData = JSON.stringify(data);
			//Connection End
			response.write(jsonData);
			response.end();
		});
	});


});

// URI : /table/delete.do
router.all('/delete.do', function (request, response) {

	//Cross Origin Resource Sharing Allow
	response.writeHeader(200, {
		"Content-Type": "Application/json",
		"Access-Control-Allow-Origin": "*"
	});

	midspot.db.tbDelete(function () {

		midspot.db.tbShow(function (rows) {
			var data = {
				result: "success"
			}
			data.tables = rows;
			//console.log(data);

			var jsonData = JSON.stringify(data);
			//Connection End
			response.write(jsonData);
			response.end();
		});
	});


});

// URI : /table/show.do
router.all('/show.do', function (request, response) {
	console.log("1");
	//Cross Origin Resource Sharing Allow
	response.writeHeader(200, {
		"Content-Type": "Application/json",
		"Access-Control-Allow-Origin": "*"
	});

	midspot.db.tbShow(function (rows) {
		var data = {
			result: "success"
		}
		data.tables = rows;

		var jsonData = JSON.stringify(data);
		//Connection End
		response.write(jsonData);
		response.end();
	});

});


router.get('/select.do', function (request, response) {

	var mysql = require('mysql');
	var pool = mysql.createPool({
		connectionLimit: 10,
		host: 'localhost',
		port: 3306,
		user: 'java72',
		password: 'java72',
		database: 'midspot'
	});

	pool.query(
		'select * from ' + request.query['name'],
		function (err, rows) {
			response.writeHead(200, {
				"Content-Type": "Application/json",
				"Access-Control-Allow-Origin": "*"
			});
			//console.log(rows);

			var data = {
				result: rows
			}

			var jsonData = JSON.stringify(data);
			//Connection End
			response.write(jsonData);
			response.end();
		});

});

module.exports = router;
