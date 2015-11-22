var net = require('net');
var chatServer = net.createServer();
var clientList = [];

chatServer.on('connection', function(client) {
	client.name = client.remoteAddress + ":" + client.remotePort;
	clientList.push(client);
	client.write('Hello! ' + client.name + '!\n');
	client.on('data',function(data){
		broadcast(data,client);
	});
	client.on('end',function(){
		clientList.splice(clientList.indexOf(client),1);//把关闭连接的客户端从列表中删除
	});
});
function broadcast(message,client){
	var endList = [];
	for (var i = 0; i < clientList.length; i++) {
		if (client !== clientList[i]) {
			if (clientList[i].writable) {
				clientList[i].write(client.name + '  says ' + message + '\n')
			}else{
				endList.push(clientList[i]);
				clientList[i].destroy();
			}
            
		};
	};

	for (var i = 0; i < endList.length; i++) {
		clientList.splice(clientList.indexOf(endList[i]),1);
		
	};
}
chatServer.listen(8005);