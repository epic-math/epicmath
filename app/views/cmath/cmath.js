'use strict';

angular.module('myApp.views.cmath', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  
    .when('/cmath', {
      templateUrl: 'views/cmath/cmath.html',
      controller: 'cmathCtrl'
    })

    .when('/cmath/linear-algebra', {
      templateUrl: 'views/cmath/linear-algebra/linear-algebra.html',
      controller: 'linear-algebraCtrl'
    })

    .when('/cmath/linear-algebra/null-space', {
      templateUrl: 'views/cmath/linear-algebra/null-space/null-space.html',
      controller: 'linear-algebraCtrl'
    })

    .when('/cmath/linear-algebra/null-space2', {
      templateUrl: 'views/cmath/linear-algebra/null-space/null-space2.html',
      controller: 'linear-algebraCtrl'
    })

    .when('/cmath/complex-variables', {
      templateUrl: 'views/cmath/complex-variables/complex-variables.html',
      controller: 'cmathCtrl'
    })

    .otherwise({redirectTo: '/home'});
}])

.controller('cmathCtrl', [ '$scope', function($scope) {

}]);

