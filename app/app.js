// With strict mode, we cannot use undeclared variables
'use strict';  

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  //'myApp.views.about',
  'about',
  'home',
  'view1',
  'view2',
  'view3',
  'not-taught',
  'cmath',
  'sidestory',
  'sat',
  'version'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({redirectTo: '/home'});
}]);