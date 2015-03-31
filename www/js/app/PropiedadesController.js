angular.module('AppControllers')

.controller('PropiedadesController', function($scope, $rootScope, $state){
	$scope.propiedades = [];
	$scope.beneficios = [];

	$scope.addPropiedad = function(){
	   var prop = {propiedad : $scope.propiedad};
	   $scope.propiedades.push(prop);
	}

	$scope.addBeneficio = function(){
	  var ben = {beneficio : $scope.beneficio};
	  $scope.beneficios.push(ben);
	}

	$scope.guardarContinuar = function(){
		if($rootScope.fichaProducto.nombre != null){
			$rootScope.fichaProducto.propiedades = $scope.propiedades;
			$rootScope.fichaProducto.beneficios = $scope.beneficios;
			console.log($rootScope.fichaProducto);
			$state.go('ficha.preview');
		}else{
			alert('Debes crear la descripción del producto');
			$state.go('ficha.descripcion');
		}
	}
});

