#!/usr/bin/node

let http = require("http");
let fs=require("fs");

let http_server = http.createServer(function(req,res) {
	if (req.url == "/character.png"){
		fs.readFile("character.png", function(err, data) {
			if (err) {
				console.log("Error");
				return
			}
			res.writeHead(200);
			res.end(data);
		});
	}


	fs.readFile("index.html",function(err, data){
		if (err){
			console.log("Error");
			return
		}
		res.writeHead(200);
		res.end(data);
	});
}).listen(1095);
