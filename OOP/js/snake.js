var map;
var food;
var snake;
var food;
var timer;
var socal;
var speed = 300;
//地图类
function Map(){
	this.width = 700;
	this.height = 500;
	this._map = null;
	this.createMap = function(){
		this._map = document.createElement('div');
		this._map.style.width = this.width + "px";
		this._map.style.height = this.height + "px";
		this._map.style.background = '#DBDBDB';
		this._map.style.position = "absolute";
		this._map.style.left = 0;
		this._map.style.top = 0;
		document.getElementById('game_main').appendChild(this._map);
	}
}

//食物类
function Food(){
	this.width = 20;
	this.height = 20;
	this._food = null;
	this.rows = 0;
	this.columns = 0;
	this.createFood = function(){
		if(this._food == null){
			this._food = document.createElement('div');
			this._food.style.width = this.width + "px";
			this._food.style.height = this.height + "px";
			this._food.style.background = '#FFCC2A';
			this._food.style.position = "absolute";
			map._map.appendChild(this._food);
		}
		this.rows = Math.floor(Math.random()*25);
		this.columns = Math.floor(Math.random()*35);
		this._food.style.left = this.columns*this.width + "px";
		this._food.style.top =  this.rows*this.height + "px";	
	}
}

//蛇类
function Snake(){
	this.width = 20;
	this.height = 20;
	this.color = "#74A2D4";
	this.direction = "L";
	this.body = [[5,6,null],[6,6,null],[7,6,null]];
	var _this = this;
	this.socal = 0;
	this.createSnake = function(){
		for(var i=0;i<this.body.length;i++){
			if(this.body[i][2] == null){
				this.body[i][2] = document.createElement('div');
				this.body[i][2].style.width = this.width + "px";
				this.body[i][2].style.height = this.height + "px";
				this.body[i][2].style.background = this.color;
				this.body[i][2].style.position = "absolute";
				map._map.appendChild(this.body[i][2]);
			}
			this.body[i][2].style.left = this.width*this.body[i][0] + "px";
			this.body[i][2].style.top = this.height*this.body[i][1] + "px";
		}
	}
	
	this.move = function(){
		var length = this.body.length-1;
		for(var i=length; i>0;i--){
			this.body[i][0] = this.body[i-1][0];
			this.body[i][1] = this.body[i-1][1];
		}
		
		switch(this.direction){
			case "L":
				this.body[0][0] -= 1;
				break;
			case "R":
				this.body[0][0] += 1;
				break;
			case "U":
				this.body[0][1] -= 1;
				break;
			case "D":
				this.body[0][1] += 1;
				break;
			default:
				break;
		}
		
		window.onkeydown = function(ev){
			ev = ev || window.event;
			switch(ev.keyCode){
				case 37:
					_this.direction = "L";
					break;
				case 38:
					_this.direction = "U";
					break;
				case 39:
					_this.direction = "R";
					break;
				case 40:
					_this.direction = "D";
					break;
			}
		}
		
		
		if(food.columns==this.body[0][0]&&food.rows==this.body[0][1]){
			var x = this.body[length][0];
			var y = this.body[length][1];
			this.body.push([x,y,null]);
			snake.createSnake();
			food.createFood();
			this.socal++;
			document.getElementById('socal').innerHTML = this.socal;
			clearInterval(timer);
			speed -= 10;
			//alert(speed);
			timer = setInterval('snake.move()',speed);
		}
		
		if(this.body[0][0]<0||this.body[0][0]>34||this.body[0][1]<0||this.body[0][1]>24){
			clearInterval(timer);
			speed = 300;
			alert("Game Over!");
			if(this.body[0][0]<0){
				this.body[0][0]=0;
			}
			if(this.body[0][0]>34){
				this.body[0][0]=34;
			}
			if(this.body[0][1]<0){
				this.body[0][1]=0;
			}
			if(this.body[0][1]>24){
				this.body[0][0]=24;
			}
			return;
		}
		
		for(var i=1;i<this.body.length;i++){
			if(this.body[0][0]==this.body[i][0]&&this.body[0][1]==this.body[i][1]){
				clearInterval(timer);
				speed = 300;
				alert("Game Over!");
				return;
			}
		}
		
		//设置蛇的位置
		for(var i=0;i<this.body.length;i++){
			this.body[i][2].style.left = this.width*this.body[i][0] + "px";
			this.body[i][2].style.top = this.height*this.body[i][1] + "px";
		}	
	}

}
































