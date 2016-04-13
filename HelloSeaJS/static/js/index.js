define(function(require,exports,module){

	var $ = require('jquery');
	function Spinning(id) {
	    this.container = $(id);
	    this.icons = this.container.children();
	    this.spinnings = [];
	};

	Spinning.prototype.start = function() {
	    this._init();
	    this.container.css("background", "none");
	    this.icons.show();
	    this._spin();
	};

	Spinning.prototype._init = function() {
	    var spinnings = this.spinnings;
	    $(this.icons).each(function(n) {
	        var node = $(this);
	        var startDeg = random(360);
	        var timer;

	        function spin() {
	            node.css("transform", "rotate(" + random(startDeg) + "deg)");
	        }
	        spinnings[n] = spin;
	        node.css({
	            top: random(40),
	            left: n * 50 + random(10),
	            zIndex: 666
	        }).hover(function() {
	                node.fadeTo(250, 1).css("zIndex", "667").css("transform", "rotate(0deg)");
	            },
	            function() {
	                node.fadeTo(250, 0.6).css("zIndex", "666");
	                timer && clearTimeout(timer);
	                timer = setTimeout(spin, Math.ceil(random(10000)));
	            });


	    });

	    return this;
	};

	Spinning.prototype._spin = function() {
	    $(this.spinnings).each(function(n, fn) {
	        setTimeout(fn, Math.ceil(random(3000)));
	    });
	    return this;
	};

	function random(x) {
	    return Math.random() * x;
	};

	module.exports = Spinning;
})