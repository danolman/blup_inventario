angular.module('AppControllers')

.controller('DescripcionController', function($scope, $rootScope){

	 	existeDB = localStorage.getItem('existeDB');
	 	console.log(existeDB);
        var db = window.openDatabase("fichaProductoDB", "1.0", "descripcion del producto", 200000);
        if(existeDB == null){
        	crearBD();
        }
    
	     function crearBD(){
	     	db.transaction(creaNueva, errorDB, successBD);    	
	     }

	     function creaNueva(tx) {
	     	 tx.executeSql('DROP TABLE IF EXISTS descripcion');
	     	 var sql = "CREATE TABLE IF NOT EXISTS descripcion("
	     	 			+ "id INTEGER PRIMARY KEY AUTOINCREMENT,"
	     	 			+ "nombre VARCHAR(50) )";
			tx.executeSql(sql);

			tx.executeSql("INSERT INTO descripcion (id, nombre) VALUES (1, 'daniel')");
			console.log('creando');
	     }

	     function errorDB(err) {
	     	 alert("Error processing SQL: "+err.code);
	     }

	     function successBD(){
	     	localStorage.existeDB = 1;
	     	alert("success!");
	     }

	
	 
	
	
});

