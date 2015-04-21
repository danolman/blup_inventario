angular.module('AppControllers', [])

.controller('LoginController', function($scope, $rootScope, $ionicSideMenuDelegate, $state){
	console.log('login, ');
	$scope.toggleLeft = function() {
		alert();
    	$ionicSideMenuDelegate.toggleLeft();
  	};
});

