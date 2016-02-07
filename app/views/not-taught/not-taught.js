'use strict';

angular.module('not-taught', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/not-taught', {
      templateUrl: 'views/not-taught/not-taught.html',
      controller: 'Not-taughtCtrl'
  });
}])


.controller('Not-taughtCtrl', [ '$scope', function($scope) {
  $scope.name = '';
  $scope.names = [{name:"Epic"}, {name:"Math"}];
  $scope.addName = function() {
    $scope.names.push( {'name':$scope.name} );
    $scope.name = '';
  };
}]);
