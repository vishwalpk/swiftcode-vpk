var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController', function($scope) {

	$scope.messages = [
		{
			sender: 'BOT',
			text: 'HI1fgssdfkngsdkf',
			time: '1:16 PM'
		},
		{
			sender: 'USER',
			text: 'HI2asfueyefkahsfk',
			time: '1:17 PM'
		},
		{
			sender: 'BOT',
			text: 'HI3',
			time: '1:18 PM'
		},
		{
			sender: 'USER',
			text: 'HI4',
			time: '1:19 PM'
		},
			
	];

     var exampleSocket = new WebSocket("ws://localhost:9000/chatSocket");
     exampleSocket.onmessage = function (event) {

      var jsonData = JSON.parse(event.data);
            console.log(jsonData);

     };
	}

);
