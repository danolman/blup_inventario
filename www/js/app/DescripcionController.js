angular.module('AppControllers')

.controller('DescripcionController', function($scope, $rootScope, $state, fichaFactory){
		
		$scope.crearFicha = function(){
			$rootScope.fichaProducto = {
				nombre: $scope.prod_nombre,
				descripcion : $scope.prod_drescripcion,
				codigo : $scope.prod_codigo,
				valorHoras : ''
			};

			console.log($rootScope.fichaProducto);
			$state.go('ficha.propiedades');
		}
});

