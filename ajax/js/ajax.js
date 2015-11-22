// JavaScript Document
function ajax(method,url,data,succed){
	var xhr = null;
		if(window.XMLHttpRequest){
		   xhr = new XMLHttpRequest();
		}else{
		   xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		if(method == "GET" && data){
			url = url + "?" + data;
		}
		
		xhr.open(method,url,true);
		
		
		if(method == "GET"){
			xhr.send();
		}else{
			xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			xhr.send(data);
		}
		
		xhr.onreadystatechange = function() {
			if ( xhr.readyState == 4 ) {
				if ( xhr.status == 200 ) {
					succeed && succeed(xhr.responseText);
				
				} else {
					alert('出错了,Err：' + xhr.status);
				}
			}
	}
	
}