/*
 * 样式控制
 */

var app = angular.module("myApp",[]);
app.controller("myCrtl",function($scope){
	$scope.firstName = '志强';
	$scope.lastName = "李";
	$scope.fullName = function(){
		return $scope.lastName + "	" + $scope.firstName;
	}
	$scope.tmp = false;
	$scope.showOrHide = function() {
		$scope.tmp = !$scope.tmp; 
	}
});