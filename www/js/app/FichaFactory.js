angular.module("AppFactories", [])

.factory("fichaFactory", function() {

	 document.addEventListener("deviceready", onDeviceReady, false);

	 function onDeviceReady() {
        var db = window.openDatabase("descripcion", "1.0", "descripcion del producto", 200000);
        db.transaction(crearBD, errorDB, successBD);
     }

     function crearBD(tx){
     	tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(100),codigo VARCHAR(50))');
     }

     function errorDB(tx, err) {
     	 alert("Error processing SQL: "+err);
     }

     function successBD(){
     	alert("success!");
     }
		return{
			//fichaProducto : fichaProducto
		}
});