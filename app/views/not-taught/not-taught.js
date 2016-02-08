'use strict';

angular.module('myApp.views.not-taught', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/not-taught', {
      templateUrl: 'views/not-taught/not-taught.html',
      controller: 'not-taughtCtrl'
    })

    .when('/not-taught/imaginaryNumber', {
      templateUrl: 'views/not-taught/imaginaryNumber/imaginaryNumber.html',
      controller: 'not-taughtCtrl'
    })

    .when('/not-taught/imaginaryNumber/history', {
      templateUrl: 'views/not-taught/imaginaryNumber/history.html',
      controller: 'not-taughtCtrl'
    })

    .otherwise({redirectTo: '/home'});
}])

.controller('not-taughtCtrl', [ '$scope', function($scope) {
  /*
  $scope.name = '';
  $scope.names = [{name:"Epic"}, {name:"Math"}];
  $scope.addName = function() {
    $scope.names.push( {'name':$scope.name} );
    $scope.name = '';
  };
  */
}]);


