/*
 * 自定义过滤器 --字符串反转 reverse
 */

var app = angular.module("myApp",[]);
app.controller("myCrtl",function($scope){
	$scope.realStr = "reverse_practise";
});

/*形参可以为任意类型*/
app.filter("reverse",function(){
	return function(obj){
		return obj.split("").reverse().join("");
	}
});