/*
 * 函数调用
 */

var app = angular.module('myApp',[]);
app.controller("myCrtl",function($scope){
	$scope.firstName = "名是什么？";
	$scope.lastName = '姓是什么？';
	$scope.fullName = function() {
		return $scope.firstName + "	" + $scope.lastName;
	}
});