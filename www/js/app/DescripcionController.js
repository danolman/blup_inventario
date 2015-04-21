angular.module('AppControllers')


.controller('DescripcionController', function($scope, $rootScope, $state, fichaFactory, categoriaFactory){

	categoriaFactory.getCategoria().then(function(data){
      console.log(data);
      $scope.arrayCategorias = data;
    });


	$scope.fichaProducto = fichaFactory.fichaProducto;
		
		$scope.crearFicha = function(){
			
			$scope.fichaProducto.nombre = $scope.prod_nombre;
			$scope.fichaProducto.descripcion = $scope.prod_drescripcion;
			$scope.fichaProducto.codigo = $scope.prod_codigo;
			
			console.log(fichaFactory.fichaProducto);
			$state.go('ficha.receta');
		}
});

