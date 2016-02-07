'use strict';

angular.module('sat', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/sat', {
      templateUrl: '/views/sat/sat.html',
      controller: 'SatCtrl'
  });
}])


.controller('SatCtrl', [ '$scope', function($scope) {
  $scope.name = '';
  $scope.names = [{name:"Epic"}, {name:"Math"}];
  $scope.addName = function() {
    $scope.names.push( {'name':$scope.name} );
    $scope.name = '';
  };
}]);
