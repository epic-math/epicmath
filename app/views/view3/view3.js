'use strict';

angular.module('view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/view3', {
      templateUrl: '/views/view3/view3.html',
      controller: 'View3Ctrl'
  });
}])


.controller('View3Ctrl', [function() {

}]);