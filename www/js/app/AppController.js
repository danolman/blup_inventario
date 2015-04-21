angular.module('AppControllers')

.controller('AppController', function($scope, $ionicSideMenuDelegate, $rootScope){
	
	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};
});