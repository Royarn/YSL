/*
 * 查询数据
 */

var app = angular.module("myApp",[]);
app.controller("myCrtl",function($scope,$http) {
	$http.get("http://localhost:8080/Angular/UserServlet")
	.then(function successCallback(resp){
		var data = JSON.stringify(resp);
		$.each(resp, function(i,n) {
			$scope.firstName = resp[i].userName;
			$scope.lastName = resp[i].password;
		});
		$scope.fullName = function(){
			return $scope.firstName + "	" + $scope.lastName; 
		}
	},function errorCallback(){
		console.log("调用服务失败.......")
	});
});