/*
'use strict';

angular.module('myApp.views.sidestory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/sidestory', {
      templateUrl: 'views/sidestory/sidestory.html',
      controller: 'sidestoryCtrl'
    })

    .when('/sidestory/numberStory', {
      templateUrl: 'views/sidestory/numberStory/scale.html',
      controller: 'sidestoryCtrl'
    })

    .otherwise({redirectTo: '/home'});
}])


.controller('sidestoryCtrl', [ '$scope', function($scope) {
}]);
*/

var app = angular.module('myApp.views.sidestory.numberStory', ['ngRoute']);
