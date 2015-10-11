var fs = require('fs');
var path = require('path');
var express = require('express'); //Express Framework Module
var router = express.Router(); //URL Routing Module
var midspot = require('./module/midspot');

// URI : /table/create.do
router.all('/insert.do', function (request, response) {

	console.log("insert");

	//Cross Origin Resource Sharing Allow
	response.writeHeader(200, {
		"Content-Type": "Application/json",
		"Access-Control-Allow-Origin": "*"
	});

	midspot.db.dtBaseInsert(function () {

		var jsonData = JSON.stringify({
			data: "success"
		});
		//Connection End
		response.write(jsonData);
		response.end();
	});
});

module.exports = router;
