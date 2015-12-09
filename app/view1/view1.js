'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', [ '$scope', function($scope) {
  $scope.name = '';
  $scope.names = [{name:"Epic"}, {name:"Math"}];
  $scope.addName = function() {
    $scope.names.push( {'name':$scope.name} );
    $scope.name = '';
  };
}]);
