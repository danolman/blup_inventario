angular.module('AppControllers')

.controller('RecetasController', function($scope, $state, fichaFactory){
	$scope.fichaProducto = fichaFactory.fichaProducto;
	$scope.insumos = [];

	$scope.addInsumo = function(){
	   if($scope.receta_costo && $scope.receta_unidades){
	   		var total = 0;
	   		if($scope.receta_medida =='Mayorista'){
	   			var total = $scope.receta_costo * $scope.receta_unidades;
	   			console.log(total);
			}
	   		else if($scope.receta_medida =='Kilos'){
	   			var total = Math.round($scope.receta_costo * $scope.receta_unidades / 1000);
	   			console.log(total);
			}
			else if($scope.receta_medida =='Litros'){
				var total = Math.round($scope.receta_costo * $scope.receta_unidades / 1000);
	   			console.log(total);
			}
			else if($scope.receta_medida =='Hora'){
				var valorMinuto = $scope.receta_costo / 60;
				console.log('valorMinuto' + valorMinuto +', '+$scope.receta_unidades);
				var total = Math.round(valorMinuto * $scope.receta_unidades);
	   			console.log(total);
			}
	   		
	   		var insumo = {
		   	tipo : $scope.receta_tipo,
		   	costo : $scope.receta_costo,
		   	medida : $scope.receta_medida,
		   	unidades : $scope.receta_unidades,
		   	cantUnidades : $scope.receta_medidaUnidades,
		   	costoTotalInsumo : total   	
		   };
		   $scope.insumos.push(insumo);

		   //limpiar formulario
		   insumo = {};
		   $scope.receta_tipo = "";
		   $scope.receta_costo = "";
		   $scope.receta_medida = "";
		   $scope.receta_unidades = "";
		   $scope.cantUnidades = "";
		}
		else{
			alert('Debes completar el precio y la cantidad de unidades');
		}   
	}

	$scope.guardarContinuar = function(){
		if($scope.fichaProducto.nombre != null){
			$scope.fichaProducto.insumos = $scope.insumos;
			console.log(fichaFactory.fichaProducto);
			$state.go('ficha.propiedades');
		}else{
			alert('Debes crear la descripción del producto');
			$state.go('ficha.descripcion');
		}
	}
});

