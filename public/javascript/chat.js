var app = angular.module('chatApp',['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {

	$scope.messages = [];


     var  exampleSocket =  new  WebSocket("wss://swiftcode-vpk.herokuapp.com/chatSocket");
    exampleSocket.onmessage  =   function  (event) {
        var jsonData = JSON.parse(event.data);
        jsonData.time = new Date().toLocaleTimeString();
        $scope.messages.push(jsonData);
        $scope.$apply(); 
        console.log(jsonData);
        console.log($scope.messages);    
    };

    $scope.sendMessage = function () {    
        exampleSocket.send($scope.userMessage);
        $scope.userMessage = "";
	};
	$scope.trust = $sce.trustAsHtml;

});
