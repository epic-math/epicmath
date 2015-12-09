'use strict';

angular.module('myApp.views.sidestory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/sidestory', {
      templateUrl: '/views/sidestory/sidestory.html',
      controller: 'SidestoryCtrl'
  });
}])


.controller('SidestoryCtrl', [ '$scope', function($scope) {
  $scope.name = '';
  $scope.names = [{name:"Epic"}, {name:"Math"}];
  $scope.addName = function() {
    $scope.names.push( {'name':$scope.name} );
    $scope.name = '';
  };
}]);
