#!/usr/bin/node

let http = require("http");
let fs=require("fs");
const data =require('./images.json');

let http_server = http.createServer(function(req,res) {

for(let i=0; i < data.images.length; i++){
	if (req.url == "/" + data.images[i]){
		fs.readFile(data.images[i], function(err, data) {
			if (err) {
				console.log("Error");
				return
			}
			res.writeHead(200);
			res.end(data);
		});
	}
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
