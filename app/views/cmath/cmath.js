'use strict';

angular.module('myApp.views.cmath', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/cmath', {
      templateUrl: 'views/cmath/cmath.html',
      controller: 'CMathCtrl'
  });
}])

.controller('CMathCtrl', [ '$scope', function($scope) {

}]);
