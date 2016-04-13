define(function(require){
	var Spinning = require('./index');//require之前，要保证jquery.js中define那段jquery的路径要跟自己的项目对应上
	var s = new Spinning("#container");
	s.start();
})
