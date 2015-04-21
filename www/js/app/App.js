// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var App = angular.module('App', ['ionic', 'AppControllers', 'AppFactories', 'ngCordova', 'factory'])

App.constant('serverURL', 'http://www.blup.cl/blup_service/');

App.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
App.constant('url', 'http://www.blup.cl/blup_service/');

App.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('login', 
      {
        url: '/',
        templateUrl: 'js/app/login/login.html',
        controller : 'LoginController'
      })
      .state('home', 
      {
        url: '/home',
        templateUrl: 'js/app/home/home.html',
        controller : 'HomeController'
      })
//FICHA PRODUCTO
      .state('ficha', 
      {
        url: '/ficha', 
        abstract: true,     
        templateUrl: 'templates/ficha.html',
      })
      .state('ficha.descripcion', 
      {
        url: '/descripcion',
        views : {
            'tab-desc' : {
              templateUrl: 'templates/descripcion.html',
              controller: 'DescripcionController'
            }
        }      
      })
      .state('ficha.propiedades', 
      {
        url: '/propiedades',
        views : {
            'tab-prop' : {
              templateUrl: 'templates/propiedades.html',
              controller: 'PropiedadesController'
            }
        }      
      })
      .state('ficha.receta', 
      {
        url: '/receta',
        views : {
            'tab-receta' : {
              templateUrl: 'templates/receta.html',
              controller: 'RecetasController'
            }
        }      
      })
      .state('ficha.preview', 
      {
        url: '/preview',
        views : {
            'tab-prev' : {
              templateUrl: 'templates/preview.html',
              controller : 'PreviewController'
            }
        }      
      })
//FICHA REGISTRO
      .state('registro', 
      {
        url: '/registro', 
        abstract: true,     
        templateUrl: 'templates/registro.html',
      })
      .state('registro.seleccion', 
      {
        url: '/seleccion',
        views : {
            'tab-seleccionProducto' : {
              templateUrl: 'templates/seleccionProducto.html',
              controller: 'SeleccionController'
            }
        }      
      })
      .state('registro.detalle', 
      {
        url: '/detalle',
        views : {
            'tab-detalleVenta' : {
              templateUrl: 'templates/detalleVenta.html',
              controller: 'DetalleController'
            }
        }      
      })
//CATEGORIAS
    .state('categorias',
      {
         url: '/categorias',
        templateUrl: 'js/app/categorias/categorias.html',
        controller: 'CategoriaController'
      
    })
      ;
});


