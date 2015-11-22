var timer = null;
function startMove(target){
	clearInterval(timer);
	var oDiv1 = document.getElementById("div1");
	timer = setInterval(function(){
		var speed = 10;
		if(oDiv1.offsetLeft >= target){
			clearInterval(timer);
		}else{
			oDiv1.style.left = oDiv1.offsetLeft + speed + "px";
		}
					
	},30);
}