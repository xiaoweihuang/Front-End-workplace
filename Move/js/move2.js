function startMove(object,attr,target){
		clearInterval(object.timer);
		object.timer = setInterval(function(){
			var currentstyle = parseInt(getStyle(object,attr));
			var speed = (target - currentstyle)/5;
			speed>0? speed = Math.ceil(speed) : speed = Math.floor(speed);
					
			if(currentstyle == target){
				clearInterval(object.timer);
			}else{
				object.style[attr] = currentstyle + speed + 'px';
			}
					
		},30)
	}
			
function getStyle(object,attr){
	return object.currentStyle?object.currentStyle[attr] : getComputedStyle(object,false)[attr];
}