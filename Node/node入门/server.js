/*var http = require('http');
var server = http.createServer(onRequest);
server.listen(8008);
function onRequest(request,response){
	response.writeHead('200',{"Content-Type":"text/plain"});
	response.write('Hello, World!\n');
	response.end();
}*/

/*var http = require('http');
var server = http.createServer(onRequest);
server.listen(8008);
console.log('Server has started!');
function onRequest(request,response){
	console.log('Request received!');
	response.writeHead('200',{"Content-Type":"text/plain"});
	response.write('Hello, World!\n');
	response.end();
}*/


/*var http = require('http');

function start(){
	function onRequest(request,response){
		console.log('Request received!');
		response.writeHead('200',{"Content-Type":"text/plain"});
		response.write('Hello, World!\n');
		response.end();
	}
	var server = http.createServer(onRequest);
	server.listen(8008);
	console.log('Server has started!')
}
exports.start = start;*/

/*var http = require('http');
var url = require('url');


function start(route){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request for '+ pathname +' received!');
		route(pathname);
		response.writeHead('200',{"Content-Type":"text/plain"});
		response.write('Hello, World!\n');
		response.end();
	}
	var server = http.createServer(onRequest);
	server.listen(8008);
	console.log('Server has started!')
}
exports.start = start;*/

/*var http = require('http');
var url = require('url');


function start(route,hander){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request for '+ pathname +' received!');
		route(pathname,hander);
		response.writeHead('200',{"Content-Type":"text/plain"});
		response.write('Hello, World!\n');
		response.end();
	}
	var server = http.createServer(onRequest);
	server.listen(8008);
	console.log('Server has started!')
}
exports.start = start;*/


/*var http = require('http');
var url = require('url');


function start(route,hander){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		var postData = "";
		console.log('Request for '+ pathname +' received!');
		request.setEncoding("utf8");
		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("Received POST data chunk '"+ postDataChunk + "'.");

		});

		request.addListener("end", function(){
			route(pathname,hander,response,postData);
		});
	}
	var server = http.createServer(onRequest);
	server.listen(8008);
	console.log('Server has started!')
}
exports.start = start;


*/


var http = require('http');
var url = require('url');
function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request for '+ pathname +' received!');
		route(pathname,handle,response,request);
	}
	var server = http.createServer(onRequest);
	server.listen(8008);
	console.log('Server has started!')
}
exports.start = start;