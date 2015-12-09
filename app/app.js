'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.views.view1',
  'myApp.views.view2',
  'myApp.views.view3',

  'myApp.nottaught',
  'myApp.views.sidestory',
  'myApp.views.sat',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({redirectTo: '/home'});
}]);
