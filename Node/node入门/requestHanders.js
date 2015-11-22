/*function start(){
	console.log("Request hander 'start' was called!");
	function sleep(milliseconds){
		var starttime = new Date().getTime();
		while(new Date().getTime() < starttime + milliseconds);
	}
	sleep(10000);
	return "Hello Start!";
}
function upload(){
	console.log("Request hander 'upload' was called!");
	return "Hello Upload!";
}

exports.start = start;
exports.upload = upload;*/



/*var exec = require('child_process').exec;
function start(response){
	console.log("Request hander 'start' was called!");
	exec("find/", 
		{ timeout: 10000, maxBuffer: 20000*1024 },
		 function(error,stdout,stderr){
			response.writeHead('200',{"Content-Type":"text/plain"});
			response.write('Hello Start!\n');
			response.end();
	})
}
function upload(response){
	console.log("Request hander 'upload' was called!");
	response.writeHead('200',{"Content-Type":"text/plain"});
	response.write('Hello Upload!\n');
	response.end();
}

exports.start = start;
exports.upload = upload;*/


var queryString = require('querystring');
var fs = require('fs')
var formidable = require("formidable");
var util = require('util');

function start(response){
	console.log("Request hander 'start' was called!");
	var body = 
	'<html>'+
	'<head>'+
	'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" enctype="multipart/form-data"  method="post">'+
	'<input type="file" name="upload">'+
	'<input type="submit" value="Upload File" />'+
	'</form>'+
    '</body>'+
    '</html>';
    response.writeHead('200',{"Content-Type":"text/html"});
	response.write(body);
	response.end();

}
function upload(response,request){
	console.log("Request hander 'upload' was called!");
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files) {
	    console.log("parsing done");
	    //fs.renameSync(files.upload.path, "./tmp/1.jpg");  windows下会报错，以下四行代码代替这行代码即可解决问题

	    var readStream = fs.createReadStream(files.upload.path)
		var writeStream = fs.createWriteStream("./tmp/1.jpg");
		util.pump(readStream, writeStream, function() {
		    fs.unlinkSync(files.upload.path);
		});

	    response.writeHead(200, {"Content-Type": "text/html"});
	    response.write("received image:<br/>");
	    response.write("<img src='/show' />");
	    response.end();
  });

}

function show(response){
	console.log("Request hander 'show' was called!");
	fs.readFile("./tmp/1.jpg","binary",function(error,file){
		if (error) {
			 response.writeHead(500, {"Content-Type": "text/plain"});
		     response.write(error + "\n");
		     response.end();
		}else{
			 response.writeHead(200, {"Content-Type": "image/jpg"});
		      response.write(file, "binary");
		      response.end();
		};
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;