'use strict';

angular.module('cmath', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  
    .when('/cmath', {
      templateUrl: 'views/cmath/cmath.html',
      controller: 'cmathCtrl'
    })

    .when('/cmath/algebra', {
      templateUrl: 'views/cmath/algebra/algebra.html',
      controller: 'cmathCtrl'
    })

    .when('/cmath/complex-variables', {
      templateUrl: 'views/cmath/complex-variables/complex-variables.html',
      controller: 'cmathCtrl'
    })

    .otherwise({redirectTo: '/home'});
}])

.controller('cmathCtrl', [ '$scope', function($scope) {

}]);

