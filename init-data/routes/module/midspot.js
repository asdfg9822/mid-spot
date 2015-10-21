var mysql = require('mysql'); //Mysql Module
var fs = require('fs');
var path = require('path');
var express = require('express'); //Express Framework Module

//db
exports.db = {};

//DB Connection
var pool = mysql.createPool({
	connectionLimit: 10,
	host: '192.168.1.8',
	port: 3306,
	user: 'java72',
	password: 'java72',
	database: 'midspot2'
});


//Excute SQL File
exports.db.sqlFile = function (sqlFile, callback) {


	fs.readFile(sqlFile, {
		encoding: 'utf-8'
	}, function (err, data) {

		if (err) return console.log(err);

		// Query별로 구분
		var line = data.split(";");
		line.forEach(function (query) {
			pool.query(query, function (err, rows) {
				if (err) return console.log(err);
				if (rows) {
					console.log(rows);
				}
			});
		});

		if (typeof callback === "function") {
			// Call it, since we have confirmed it is callable​
			callback();
		}
	});
};

//Table Create
exports.db.dtBaseInsert = function (callback) {
	var sqlFile = path.join(__dirname, '../../database/base_data_1.sql');
	exports.db.sqlFile(sqlFile, callback);
};

//Table Create
exports.db.tbCreate = function (callback) {
	var sqlFile = path.join(__dirname, '../../database/create_table.sql');
	exports.db.sqlFile(sqlFile, callback);
};

//Table Delete
exports.db.tbDelete = function (callback) {
	var sqlFile = path.join(__dirname, '../../database/delete_table.sql');
	exports.db.sqlFile(sqlFile, callback);
};

//Show Tables
exports.db.tbShow = function (callback) {

	pool.query('show tables', function (err, rows) {
		if (err) return console.log(err);
		if (rows) {
			//console.log(rows.length);

			var row = {};
			for (var i = 0; i < rows.length; i++) {
				row[i] = rows[i].Tables_in_midspot;
			}

			if (typeof callback == "function") {
				callback(row);
			}
		}
	});
}