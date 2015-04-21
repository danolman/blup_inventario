angular.module('factory', [])

.factory('homeFactory', function($http, $q){

	var url = 'http://www.blup.cl/blup_service/';
	var categoria;

	function setNombreCategoria(nombre){
		categoria = nombre;
	}

	function insertCategoria(){
		var deferred = $q.defer();
		$http({
		    url: url + 'ingresarCategoria/ingresar_categoria.php', 
		    method: "GET",
		    params: {nombreCategoria: categoria}
		 })
		.success(function(data, status){
			deferred.resolve(data);
			console.log('categoria creada');
		})
		.error(function(){
			deferred.resolve(data);
			console.log('error');
		});
	}
	

	return{
		insertCategoria : insertCategoria,
		setNombreCategoria : setNombreCategoria
	}
});

