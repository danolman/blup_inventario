angular.module('AppControllers')

.controller('CategoriaController', function($scope, $ionicModal, $ionicListDelegate, categoriaFactory){
    $scope.nueva = {};
    $scope.isDisabled = true;
    categoriaFactory.getCategoria().then(function(data){
      console.log(data);
      $scope.arrayCategorias = data;
    });
 
  $scope.getCategoria = function(){
    categoriaFactory.getCategoria().then(function(data){
      console.log(data);
      $scope.arrayCategorias = data;
    }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  }
   $scope.ingresarCategoria = function(){
    console.log($scope.nueva.categoria);
    /*
    var nuevaCategoria = document.getElementById("nombreCategoria").value;
    console.log(nuevaCategoria);

    categoriaFactory.setNombreCategoria(nuevaCategoria);
    categoriaFactory.insertCategoria().then(function(data){
      console.log(data);
    });
*/
  }

  $scope.deleteCategoria = function(index){
    $ionicListDelegate.closeOptionButtons();
  }
 
	$ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
});

