'use strict';

angular.module('about', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'views/about/about.html',
      controller: 'AboutCtrl'
    });
}])

.controller('AboutCtrl', [ '$scope', function($scope) {

}]);
