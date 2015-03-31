// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var App = angular.module('App', ['ionic', 'AppControllers', 'AppFactories', 'ngCordova'])

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

App.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/ficha/descripcion');

  $stateProvider
      .state('login', 
      {
        url: '/',
        templateUrl: 'templates/login.html',
        controller : 'LoginController'
      })
      .state('home', 
      {
        url: '/home',
        templateUrl: 'templates/home.html',
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
      ;
});


