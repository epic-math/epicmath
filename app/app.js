'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.views.about',
  'myApp.views.home',
  'myApp.views.view1',
  'myApp.views.view2',
  'myApp.views.view3',

  'myApp.views.not-taught',
  'myApp.views.cmath',
  'myApp.views.sidestory',
  'myApp.views.sat',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({redirectTo: '/home'});
}]);
