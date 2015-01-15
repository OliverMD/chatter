/**
 * Created by oliver on 13/01/15.
 */
var app = angular.module("app", []);

app.controller("AppCtrl", function($http, $scope){
    $http.get("http://localhost:3000/messages").success(function (resp) {
        console.log(resp);
        $scope.resp = resp;
    });
    $scope.messages = [
    ];
    var globalId = 0;
    $scope.genId = function(){
        return globalId++;
    };
    $scope.addMessage = function() {
        $scope.messages.push({message:$scope.newMessage, id:$scope.genId()});
        $scope.newMessage = '';
    };
});