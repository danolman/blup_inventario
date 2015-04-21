angular.module('AppControllers')

.controller('DescripcionController', function($scope, $rootScope, $state, fichaFactory, categoriaFactory){

	categoriaFactory.getCategoria().then(function(data){
      console.log(data);
      $scope.arrayCategorias = data;
    });

	$rootScope.fichaProducto = [];
		
		$scope.crearFicha = function(){
			
			$rootScope.fichaProducto.nombre = $scope.prod_nombre;
			$rootScope.fichaProducto.descripcion = $scope.prod_drescripcion;
			$rootScope.fichaProducto.codigo = $scope.prod_codigo;
			
			console.log($rootScope.fichaProducto);
			$state.go('ficha.receta');
		}
});

