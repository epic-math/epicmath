'use strict';

var app = angular.module('myApp.views.cmath', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/cmath', {
      templateUrl: 'views/cmath/cmath.html',
      controller: 'cmathCtrl'
    .otherwise({redirectTo: '/home'});
}]);

app.controller('cmathCtrl', [ '$scope', function($scope) {

}]);

