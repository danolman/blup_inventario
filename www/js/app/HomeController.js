angular.module('AppControllers')

.controller('HomeController', function($scope, $rootScope){
	console.log('home');
	$rootScope.toggleLeft;
	var doughnutData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Red"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Green"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Yellow"
				}

			];

			var ctx = document.getElementById("canvas").getContext("2d");
			window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});		
  
});

