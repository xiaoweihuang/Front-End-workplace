function getStyle(object,attr){
				return object.currentStyle?object.currentStyle[attr]:getComputedStyle(object)[attr];
			}
			function startMove(object,json){
				clearInterval(object.timer);
				object.timer = setInterval(function(){
					for(attr in json){
						if(attr == 'opacity'){
							var currentstyle = parseInt(parseFloat(getStyle(object,attr))*100);
						}else{
							var currentstyle = parseInt(getStyle(object,attr));
						}
						var speed = (json[attr]-currentstyle)/8;
						speed>0? speed=Math.ceil(speed):speed=Math.floor(speed);
						if(currentstyle == json[attr]){
							clearInterval(object.timer);
						}else{
							if(attr == 'opacity'){
								object.style.filter = 'alpha(opacity:'+ currentstyle + speed +')';
								object.style.opacity = (currentstyle + speed)/100;
							}else{
								object.style[attr] = currentstyle + speed + 'px';
							}
						}
					}
				},30)
			}