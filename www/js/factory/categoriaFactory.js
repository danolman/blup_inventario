angular.module('factory', [])

.factory('categoriaFactory', function($http, $q, $ionicLoading, $ionicPopup, serverURL){

	var categoria;

	function setNombreCategoria(nombre){
		categoria = nombre;
		console.log('haz creado un nuevo nombre de categoria: ' + categoria);
	}
	function getCategoria(){
		var deferred = $q.defer();
		$ionicLoading.show({template: '<h3><i class="icon ion-loading-c"></i></h3><br/>Cargando'});
		$http({
            url:serverURL + 'categoria/get_categoria.php',
                method: "GET",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .success(function(data){
            	console.log(data);
            	$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(err){
				console.log(err);
				$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
			     	title: 'ERROR',
			     	template: 'Por favor intentalo más tarde',
			     	buttons:[{
			     		text: '<b>Aceptar</b>',
        				type: 'button-assertive',
			     	}]
			    });
				deferred.reject();
			});
		 return deferred.promise;
	}

	function refresh(){
		var deferred = $q.defer();
		$ionicLoading.show({template: '<h3><i class="icon ion-loading-c"></i></h3><br/>Cargando'});
		$http({
            url:serverURL + 'ingresarCategoria/ingresar_categoria.php',
                method: "GET",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: {nombreCategoria  : categoria}
            })
            .success(function(data){
            	console.log(data);
            	$ionicLoading.hide();
				deferred.resolve(data);
			})
			.error(function(err){
				console.log(err);
				$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
			     	title: 'ERROR',
			     	template: 'Por favor intentalo más tarde',
			     	buttons:[{
			     		text: '<b>Aceptar</b>',
        				type: 'button-assertive',
			     	}]
			    });
				deferred.reject();
			})
			.finally(function() {
		       // Stop the ion-refresher from spinning
		       $scope.$broadcast('scroll.refreshComplete');
		     });
		 return deferred.promise;
		}

	function insertCategoria(){
		var deferred = $q.defer();
		$ionicLoading.show({template: '<h3><i class="icon ion-loading-c"></i></h3><br/>Cargando'});
		$http({
            url:serverURL + 'categoria/ingresar_categoria.php',
                method: "GET",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: {nombreCategoria  : categoria}
            })
            .success(function(data){
            	console.log(data);
            	$ionicLoading.hide();
            	var alertPopup = $ionicPopup.alert({
			     	title: 'EXITO!!',
			     	template: 'Categoria '+data+' creada!',
			     	buttons:[{
			     		text: '<b>Aceptar</b>',
        				type: 'button-balanced',
			     	}]
			    });
				deferred.resolve(data);
			})
			.error(function(err){
				console.log(err);
				$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
			     	title: 'ERROR',
			     	template: 'Por favor intentalo más tarde',
			     	buttons:[{
			     		text: '<b>Aceptar</b>',
        				type: 'button-assertive',
			     	}]
			    });
				deferred.reject();
			});
		 return deferred.promise;
		}
	

	return{
		insertCategoria : insertCategoria,
		setNombreCategoria : setNombreCategoria,
		getCategoria : getCategoria
	}
});

