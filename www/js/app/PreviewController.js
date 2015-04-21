angular.module('AppControllers')

.controller('PreviewController', function($scope, $rootScope, $state){

	$scope.verPropiedades = true;
	$scope.togglePropiedades = function(bool){
		$scope.verPropiedades = bool;
	}

	$scope.verInsumos = true;
	$scope.toggleInsumos = function(bool){
		$scope.verInsumos = bool;
	}

	//calcula costos y ganancias de la receta ........ costo ventaReferencia ganancia precioFinal	
	$scope.calcular = function(){
		if($rootScope.fichaProducto){
			if($rootScope.fichaProducto.insumos && $rootScope.fichaProducto.insumos.length > 0){
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
				$scope.producto_precioFinal = $rootScope.fichaProducto.valorReferencial;
			}
			else{
				$rootScope.fichaProducto.valorReferencial = 0;
				$rootScope.fichaProducto.ganancia = 0;
				$rootScope.fichaProducto.costo = 0;
				$scope.producto_precioFinal = 0;
			}
			
		}
		else{
				//alert('Debes crear la descripción del producto');
				$state.go('ficha.descripcion');
		}

	}

	
});

