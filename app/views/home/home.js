'use strict';


angular.module('home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home/home.html',
      controller: 'homeCtrl'
    });
}])

.controller('homeCtrl', [ '$scope', function($scope) {

}]);
