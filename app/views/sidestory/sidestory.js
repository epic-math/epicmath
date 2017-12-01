'use strict';

angular.module('myApp.views.sidestory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/sidestory', {
      templateUrl: 'views/sidestory/sidestory.html',
      controller: 'sidestoryCtrl'
    })

    .when('/sidestory/numberStory', {
      templateUrl: 'views/sidestory/numberStory/numberStory.html',
      controller: 'sidestoryCtrl'
    })

    .when('/sidestory/numberStory/scale', {
      templateUrl: 'views/sidestory/numberStory/scale.html',
      controller: 'sidestoryCtrl'
    })

    .otherwise({redirectTo: '/home'});
}])


.controller('sidestoryCtrl', [ '$scope', function($scope) {
  /*
  $scope.name = '';
  $scope.names = [{name:"Epic"}, {name:"Math"}];
  $scope.addName = function() {
    $scope.names.push( {'name':$scope.name} );
    $scope.name = '';
  };
  */
}]);
