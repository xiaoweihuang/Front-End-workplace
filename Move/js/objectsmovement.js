function startMove(object,target){
		clearInterval(object.timer);
		object.timer = setInterval(function(){
			var speed = (target - object.offsetWidth)/8;
			if(speed > 0){
				speed = Math.ceil(speed);
			}else{
				speed = Math.floor(speed);
			}
					
			if(object.offsetWidth == target){
				clearInterval(object.timer);
			}else{
				object.style.width = object.offsetWidth + speed + 'px';
			}
		},30)
}