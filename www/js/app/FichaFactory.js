angular.module("AppFactories", [])

.factory("fichaFactory", function() {

	
		var fichaProducto =  function getFicha(){
				var ficha = {
					nombre : 'dd',
					descripcion : '',
					codigo : '',
					propiedades : {},
					Beneficios: {},
					valorHoras: 1,
					insumos : [
						{
							insumo : {
								tipo 		: '',
								costo		: '',
								medida		: '',
								unidades	: '',
								cantUnidades: ''
							}
						}
					]
				}
			}
		

		return{
			fichaProducto : fichaProducto
		}
});