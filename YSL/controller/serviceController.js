/*
 * 依赖注入
 */

var app = angular.module("myApp",[]);

/*
 * 1.通过provider
 */

app.config(function($provide) {
	$provide.provider('MathService',function(){
		this.$get = function(){
			var factory = {};
			factory.multiply = function(a,b) {
				return a * b;
			}
			return factory;
		};
	});
});

app.value("defaultInput",10);

//app.config(function($provide) {
//  $provide.provider('MathService', function() {
//     this.$get = function() {
//        var factory = {};
//        
//        factory.multiply = function(a, b) {
//           return a * b;
//        }
//        return factory;
//     };
//  });
// });
//			
//app.value("defaultInput", 5);

/*
 * 向控制器传递
 */

//app.controller("myCrtl",function($scope,MathService,defaultInput) {
//	$scope.number = defaultVal;
//	$scope.totalNum = MathService.multiply($scope.number,$scope.number);
//	$scope.cj = function() {
//		$scope.totalNum =  MathService.multiply($scope.number,$scope.number);
//	}
//	
//});


// app.factory('MathService', function() {
//  var factory = {};
//  
//  factory.multiply = function(a, b) {
//     return a * b;
//  }
//  return factory;
// });
         
// app.service('CalcService', function(MathService){
//  this.square = function(a) {
//     return MathService.multiply(a,a);
//  }
// });
         
   app.controller('myCrtl', function($scope, MathService, defaultInput) {
    $scope.number = defaultInput;
    $scope.totalNum = MathService.multiply($scope.number,$scope.number);

    $scope.cj = function() {
       $scope.totalNum = MathService.multiply($scope.number,$scope.number);
    }
   });