'use strict';

angular.module('myApp.views.cmath.linear-algebra', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    /*
    .when('/cmath/linear-algebra', {
      templateUrl: 'views/cmath/linear-algebra/linear-algebra.html',
      controller: 'linear-algebraCtrl'
    })

    .when('/cmath/linear-algebra/null-space', {
      templateUrl: 'views/cmath/linear-algebra/null-space/null-space.html',
      controller: 'linear-algebraCtrl'
    })

    .otherwise({redirectTo: '/cmath'});
    */

}])

.controller('linear-algebraCtrl', [ '$scope', function($scope) {

}]);