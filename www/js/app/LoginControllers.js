angular.module('AppControllers', [])

.controller('LoginController', function($scope, $rootScope, $ionicSideMenuDelegate, $state){
	$rootScope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};
});

