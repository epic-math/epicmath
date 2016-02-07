// With strict mode, we cannot use undeclared variables
'use strict';  

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'about',
  'myApp.views.home',
  'myApp.views.view1',
  'myApp.views.view2',
  'myApp.views.view3',
  'myApp.views.not-taught',
  'myApp.views.cmath',
  'myApp.views.sidestory',
  'myApp.views.sat',
  'myApp.version'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({redirectTo: '/home'});
}]);