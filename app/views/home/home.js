'use strict';


angular.module('myApp.views.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home/home.html',
      controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [ '$scope', function($scope) {

}]);
