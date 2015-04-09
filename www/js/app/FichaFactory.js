angular.module("AppFactories", [])

.factory("fichaFactory", function() {

		var fichaProducto = [];

		function calcular(){
			var costo = 0;
			for(var i = 0; i< fichaProducto.length; i++){
				console.log(fichaProducto[i].costoTotalInsumo);
				costo = costo + fichaProducto[i].costoTotalInsumo;
				$scope.fichaProducto.costo = costo;
			}
			fichaProducto.valorReferencial = fichaProducto.costo * 4;
			fichaProducto.ganancia = fichaProducto.valorReferencial - fichaProducto.costo;
			return fichaProducto;
		}

	 //document.addEventListener("deviceready", function(){

	 	localStorage.clear();
	 	var existeDB = localStorage.getItem('existeDB');
	 	console.log(existeDB);
        var db = window.openDatabase("fichaProductoDB", "1.0", "descripcion del producto", 200000);
        if(existeDB == null){
        	db.transaction(creaNueva, errorDB, successBD);
        }

	     function creaNueva(tx) {
	     	 tx.executeSql('DROP TABLE IF EXISTS ficha');
	     	 tx.executeSql('DROP TABLE IF EXISTS propiedad');
	     	 tx.executeSql('DROP TABLE IF EXISTS insumo');
	     	 var sql_desdcripcion = "CREATE TABLE IF NOT EXISTS ficha("
	     	 			+ "id INTEGER PRIMARY KEY AUTOINCREMENT,"
	     	 			+ "nombre VARCHAR(50),"
	     	 			+ "descripcion TEXT,"
	     	 			+ "codigo VARCHAR(100),"
	     	 			+ "valorHoras VARCHAR(50),"
	     	 			+ "imgagen VARCHAR(250)"
	     	 			+")";
			var sql_propiedad = "CREATE TABLE IF NOT EXISTS propiedad("
	     	 			+ "id INTEGER PRIMARY KEY AUTOINCREMENT,"
	     	 			+ "idFicha NUMBER(50),"
	     	 			+ "propiedad VARCHAR(250)"
	     	 			+")";
			var sql_insumo = "CREATE TABLE IF NOT EXISTS insumo("
	     	 			+ "id INTEGER PRIMARY KEY AUTOINCREMENT,"
	     	 			+ "idFicha NUMBER(50),"
	     	 			+ "tipo VARCHAR(100),"
	     	 			+ "costo NUMBER(100),"
	     	 			+ "medida VARCHAR(50),"
	     	 			+ "cantidad NUMBER(100),"
	     	 			+ "UnidadMedida VARCHAR(50)"
	     	 			+")";

			tx.executeSql(sql_desdcripcion);
			tx.executeSql(sql_propiedad);
			tx.executeSql(sql_insumo);

			console.log('creando');
	     }

	     function errorDB(err) {
	     	alert("Error processing SQL: "+err.code);
	     }

	     function successBD(){
	     	localStorage.existeDB = 1;
	     	console.log("success!");
	     }	

	 //}, false);

		return{
			fichaProducto : fichaProducto,
			getCalculo : function(){
				return calcular();
			}
		}
});