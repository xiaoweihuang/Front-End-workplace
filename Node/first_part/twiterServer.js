var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.send("Wclcome to twiter!");
});
app.listen(8008);