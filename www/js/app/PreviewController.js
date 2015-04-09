angular.module('AppControllers')

.controller('PreviewController', function($scope, $state, fichaFactory){
	var getDatosFicha = function(){
		$scope.fichaProducto = fichaFactory.getCalculo();
		console.log($scope.fichaProducto);
	}
	

	/*if($scope.fichaProducto.nombre != null && $scope.fichaProducto.insumos != null){
		console.log($scope.fichaProducto.insumos);
	}
	else{
			alert('Debes crear la descripción del producto');
			$state.go('ficha.descripcion');
	}*/
	
});

