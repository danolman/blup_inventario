angular.module('AppControllers')

.controller('PreviewController', function($scope, $rootScope, $state){
	//calcula costos y ganancias de la receta ........ costo ventaReferencia ganancia precioFinal
	
	$scope.calcular = function(){
		alert();
		if($rootScope.fichaProducto){
			console.log($rootScope.fichaProducto.insumos);
			var ele = $rootScope.fichaProducto.insumos;
			var costo = 0;
			for(var i = 0; i< ele.length; i++){
				console.log(ele[i].costoTotalInsumo);
				costo = costo + ele[i].costoTotalInsumo;
				$rootScope.fichaProducto.costo = costo;
			}
			$rootScope.fichaProducto.valorReferencial = $rootScope.fichaProducto.costo * 4;
			$rootScope.fichaProducto.ganancia = $rootScope.fichaProducto.valorReferencial - $rootScope.fichaProducto.costo;
		}
		else{
				alert('Debes crear la descripción del producto');
				$state.go('ficha.receta');
		}

	}

	
});

