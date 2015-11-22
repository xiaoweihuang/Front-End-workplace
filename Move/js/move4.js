function startMove(object,attr,target,fn){
				clearInterval(object.timer);
				object.timer = setInterval(function(){
					if(attr == 'opacity'){
						var currentstyle = parseInt((getStyle(object,attr))*100);
					}else{
						var currentstyle = parseInt(getStyle(object,attr));
					}
					
					var speed = (target-currentstyle)/8;
					speed>0?speed = Math.ceil(speed):speed = Math.floor(speed);
					if(currentstyle == target){
						clearInterval(object.timer);
						if(fn){
							fn();
						}
					}else{
						if(attr == 'opacity'){
							object.style.filter = "alpha(opacity:'+ currentstyle +　speed +')";
							object.style.opacity = (currentstyle +　speed)/100;
						}else{
							object.style[attr] = currentstyle +　speed + 'px';
						}

					}
				},30)
			}
			
			function getStyle(object,attr){
				return  object.currentStyle?object.currentStyle[attr]:getComputedStyle(object,false)[attr];
			}