'use strict';

angular.module('myApp.nottaught', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/nottaught', {
    templateUrl: 'nottaught/nottaught.html',
    controller: 'NottaughtCtrl'
  });
}])


.controller('NottaughtCtrl', [ '$scope', function($scope) {
  $scope.name = '';
  $scope.names = [{name:"Epic"}, {name:"Math"}];
  $scope.addName = function() {
    $scope.names.push( {'name':$scope.name} );
    $scope.name = '';
  };
}]);
