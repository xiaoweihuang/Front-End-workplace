/*function route(pathname,handle){
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	}else{
		console.log("No request handler found for " + pathname);
		return "404 not found"
	};
}
exports.route = route;*/

/*function route(pathname,handle, response,postData){
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response,postData);
	}else{
		console.log("No request handler found for " + pathname);
		response.writeHead('200',{"Content-Type":"text/plain"});
		response.write('404 not found\n');
		response.end();
	};
}
exports.route = route;*/

function route(pathname,handle, response,request){
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response,request);
	}else{
		console.log("No request handler found for " + pathname);
		response.writeHead('200',{"Content-Type":"text/plain"});
		response.write('404 not found\n');
		response.end();
	};
}
exports.route = route;