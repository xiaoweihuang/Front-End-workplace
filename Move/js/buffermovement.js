var timer=null;
			function startMove(target){
				clearInterval(timer);	
				var oDiv = document.getElementById('div1');
				setInterval(function(){
					if(oDiv.offsetLeft > target){
						var speed = Math.floor((target-oDiv.offsetLeft)/5);
					}else{
						var speed = Math.ceil((target-oDiv.offsetLeft)/5);
					}
					
					if(oDiv.offsetLeft == target){
						clearInterval(timer);
					}else{
						oDiv.style.left = oDiv.offsetLeft + speed + 'px';
					}
				},30)
			}