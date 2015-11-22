function getStyle(object,attr){
	return object.currentStyle?object.currentStyle[attr]:getComputedStyle(object)[attr];
}
function startMove(object,json,fn){
	clearInterval(object.timer);
	object.timer = setInterval(function(){
		var boolStop = true;
		for(attr in json){
			if(attr == 'opacity'){
				var currentstyle = parseInt(parseFloat(getStyle(object,attr))*100);
			}else{
				var currentstyle = parseInt(getStyle(object,attr));
			}
			var speed = (json[attr]-currentstyle)/30;
			speed>0? speed=Math.ceil(speed):speed=Math.floor(speed);
			if(currentstyle != json[attr] ){
				boolStop = false;
			}
				if(attr == 'opacity'){
					object.style.filter = 'alpha(opacity:'+ currentstyle + speed +')';
					object.style.opacity = (currentstyle + speed)/100;
				}else{
					object.style[attr] = currentstyle + speed + 'px';
				}
						
			}
					
		if(boolStop){
			clearInterval(object.timer);
			if(fn){
				fn();
			}
		}
	},30)
}