angular.module('AppControllers')

.controller('PropiedadesController', function($scope, $state, fichaFactory){
	$scope.fichaProducto = fichaFactory.fichaProducto;
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
		if($scope.fichaProducto.nombre != null){
			$scope.fichaProducto.propiedades = $scope.propiedades;
			$scope.fichaProducto.beneficios = $scope.beneficios;
			console.log($scope.fichaProducto);
			$state.go('ficha.preview');
		}else{
			alert('Debes crear la descripción del producto');
			$state.go('ficha.descripcion');
		}
	}
});

