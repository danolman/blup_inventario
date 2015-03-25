angular.module('AppControllers')

.controller('DescripcionController', function($scope, $rootScope, fichaFactory){
	var obj = new fichaFactory.fichaProducto;
	console.log(obj);
});

