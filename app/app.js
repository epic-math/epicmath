
// With strict mode, we cannot use undeclared variables
'use strict';  

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  //'myApp.views.about',
  //'myApp.views.home',
  'myApp.views.view1',
  'myApp.views.view2',
  'myApp.views.view3',

  'myApp.views.not-taught',
  //'myApp.views.cmath',
  'myApp.views.sidestory',
  'myApp.views.sat',
  'myApp.version'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'views/about/about.html',
      controller: 'AboutCtrl'
    })
    .when('/home', {
      templateUrl: 'views/home/home.html',
      controller: 'HomeCtrl'
    })
    .when('/cmath', {
      templateUrl: 'views/cmath/cmath.html',
      controller: 'CMathCtrl'
    })
    .when('/cmath/algebra', {
      templateUrl: 'views/cmath/algebra/algebra.html',
      controller: 'CMathCtrl'
    })
    .when('/cmath/complex-variables', {
      templateUrl: 'views/cmath/complex-variables/complex-variables.html',
      controller: 'CMathCtrl'
    })
    .otherwise({redirectTo: '/home'});
}]);